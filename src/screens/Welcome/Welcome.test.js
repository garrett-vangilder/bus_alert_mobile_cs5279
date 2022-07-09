import 'react-native';
import '@testing-library/jest-dom';
import React from 'react';
import {screen, fireEvent, waitFor} from '@testing-library/react-native';

import Welcome from './Welcome';
import {renderWithProviders} from '../../utils/testUtils';
import {hasLocationPermission} from '../../utils/locationUtils';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

jest.mock('@react-navigation/elements', () => {
  const actual = jest.requireActual('@react-navigation/elements');
  return {
    ...actual,
    useHeaderHeight: jest.fn(),
  };
});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('../../utils/locationUtils', () => {
  const actual = jest.requireActual('../../utils/locationUtils');
  return {
    ...actual,
    hasLocationPermission: jest.fn(() => Promise.resolve(true)),
    hasPermissionIOS: jest.fn(() => Promise.resolve(true)),
  };
});

function renderWelcome(props = defaultProps, providerProps = {}) {
  return renderWithProviders(<Welcome {...props} />, {
    childContext: providerProps,
  });
}

describe('Welcome', () => {
  beforeEach(() => {
    renderWelcome();
  });

  test('renders a welcome message', async () => {
    const expectedText = await waitFor(() =>
      screen.getByText('Welcome to Bus Alert'),
    );

    expect(expectedText).toBeTruthy();
  });

  test('renders a route code text input', async () => {
    const textInput = await waitFor(() =>
      screen.getByTestId('short-code-text-input'),
    );

    expect(textInput).toBeTruthy();
  });

  test('renders a driving button', async () => {
    const button = await waitFor(() =>
      screen.getByTestId('start-driving-button'),
    );

    expect(button).toBeTruthy();
  });

  test('button is disabled by default', async () => {
    const mockNavigate = jest.fn();

    renderWelcome({
      ...defaultProps,
      navigation: {
        navigate: mockNavigate,
      },
    });
    const button = await waitFor(() =>
      screen.getByTestId('start-driving-button'),
    );

    fireEvent(button, 'click');

    expect(mockNavigate).not.toBeCalled();
  });

  test('button is enabled once shortCode is populated', async () => {
    const mockNavigate = jest.fn();

    renderWelcome(
      {
        ...defaultProps,
        navigation: {
          navigate: mockNavigate,
        },
      },
      {
        shortCode: {
          shortCode: '1234',
          setShortCode: jest.fn(),
        },
      },
    );
    const button = await waitFor(() =>
      screen.getByTestId('start-driving-button'),
    );
    fireEvent(button, 'click');
    expect(mockNavigate).toBeCalled();
  });

  test('submitting text will update shortCode', async () => {
    const mockSetShortCode = jest.fn();

    renderWelcome(
      {
        ...defaultProps,
      },
      {
        shortCode: {
          shortCode: '',
          setShortCode: mockSetShortCode,
        },
      },
    );
    const textInput = await waitFor(() =>
      screen.getByTestId('short-code-text-input'),
    );
    fireEvent.changeText(textInput, 'FAKE_SHORT_CODE');

    expect(mockSetShortCode).toBeCalledWith('FAKE_SHORT_CODE');
  });

  test('checks location permissions called on render', async () => {
    await waitFor(() => screen.getByTestId('short-code-text-input'));

    expect(hasLocationPermission).toBeCalled();
  });
});
