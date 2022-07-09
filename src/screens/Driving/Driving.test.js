import 'react-native';
import '@testing-library/jest-dom';
import React from 'react';
import {renderWithProviders} from '../../utils/testUtils';
import Driving from './Driving';
import {fireEvent, screen, waitFor} from '@testing-library/react-native';

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('../../utils/locationUtils', () => {
  const actual = jest.requireActual('../../utils/locationUtils');
  return {
    ...actual,
    hasLocationPermission: jest.fn(() => Promise.resolve(true)),
    hasPermissionIOS: jest.fn(() => Promise.resolve(true)),
  };
});

function renderDriving(props = defaultProps, providerProps = {}) {
  return renderWithProviders(<Driving {...props} />, {
    childContext: providerProps,
  });
}

describe('Driving', () => {
  beforeEach(() => {
    renderDriving(defaultProps, {});
  });

  test('renders current route tag', async () => {
    const routeTag = await waitFor(() =>
      screen.getByTestId('current-route-id'),
    );
    expect(routeTag).toBeTruthy();
  });
  test('renders current ping count', async () => {
    const pingCount = await waitFor(() =>
      screen.getByTestId('current-route-pingCount'),
    );
    expect(pingCount).toBeTruthy();
  });
  test('renders location', async () => {
    renderDriving(defaultProps, {
      location: {
        location: {
          coords: {
            longitude: '1.1',
            latitude: '2.2',
          },
        },
      },
    });
    const lat = await waitFor(() => screen.getByTestId('current-route-lat'));
    const long = await waitFor(() => screen.getByTestId('current-route-long'));
    expect(lat).toBeTruthy();
    expect(long).toBeTruthy();
  });
  test('renders stop driving button', async () => {
    const stopButton = await waitFor(() => screen.getByTestId('driving-stop'));
    expect(stopButton).toBeTruthy();
  });
  test('onPress of button resets shortCode and navigates back', async () => {
    const mockSetLocation = jest.fn();
    const mockSetShortCode = jest.fn();
    const mockGoBack = jest.fn();

    renderDriving(
      {
        ...defaultProps,
        navigation: {
          goBack: mockGoBack,
        },
      },
      {
        shortCode: {
          setShortCode: mockSetShortCode,
        },
        location: {
          setLocation: mockSetLocation,
        },
      },
    );
    const stopButton = await waitFor(() => screen.getByTestId('driving-stop'));

    fireEvent(stopButton, 'click');
    expect(mockSetLocation).toBeCalledWith(null);
    expect(mockSetShortCode).toBeCalledWith('');
    expect(mockGoBack).toBeCalled();
  });
});
