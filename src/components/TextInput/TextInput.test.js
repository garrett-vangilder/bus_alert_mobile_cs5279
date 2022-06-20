import 'react-native';
import React from 'react';
import TextInput from './TextInput';

import {render, fireEvent} from '@testing-library/react-native';

describe('TextInput', () => {
  it('renders uneditable', async () => {
    const {getByPlaceholderText, debug} = render(
      <TextInput
        onChange={v => console.log(v)}
        placeholder={'TEST'}
        value={'TEST'}
        defaultValue={'TEST'}
        editable={false}
      />,
    );
    await getByPlaceholderText('TEST');
  });

  it('performs onChange', async () => {
    const onChangeMock = jest.fn();
    const {getByPlaceholderText} = render(
      <TextInput
        onChange={v => onChangeMock(v)}
        placeholder={'TEST'}
        value={'TEST'}
        defaultValue={'TEST'}
      />,
    );

    fireEvent.changeText(await getByPlaceholderText('TEST'), 'New Value');
    expect(onChangeMock).toHaveBeenCalledWith('New Value');
  });
});
