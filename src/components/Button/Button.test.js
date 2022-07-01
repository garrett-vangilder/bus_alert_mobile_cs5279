import 'react-native';
import React from 'react';
import Button from './Button';

import {render, fireEvent} from '@testing-library/react-native';

describe('Button', () => {
  ['primary', 'secondary', 'text'].forEach(style => {
    it(`renders button - ${style}`, async () => {
      const {getByText} = render(<Button style={style} text={'submit'} />);
      await getByText('submit');
    });
  });

  it('performs onPress', async () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button
        style={'primary'}
        text={'submit'}
        onPress={() => onPressMock()}
      />,
    );

    fireEvent.press(await getByText('submit'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('does not perform onPress when button is disabled', async () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button
        disabled={true}
        style={'primary'}
        text={'submit'}
        onPress={() => onPressMock()}
      />,
    );

    fireEvent.press(await getByText('submit'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
