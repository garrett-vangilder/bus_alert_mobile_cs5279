import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './styles';

export default ({
  defaultValue,
  editable,
  placeholder,
  value,
  onChange,
  label,
}) => {
  let containerStyles, labelStyles, inputStyles;
  if (!editable) {
    containerStyles = {...styles.container, ...styles.uneditableContainer};
    labelStyles = {...styles.label, ...styles.uneditableLabel};
    inputStyles = {...styles.input, ...styles.uneditableInput};
  } else {
    containerStyles = {...styles.container};
    labelStyles = {...styles.label};
    inputStyles = {...styles.input};
  }
  return (
    <View style={containerStyles}>
      {label && <Text style={labelStyles}>{label}</Text>}
      <TextInput
        autoCapitalize={'none'}
        autoComplete={'off'}
        autoCorrect={false}
        autoFocus={false}
        clearButtonMode={'while-editing'}
        defaultValue={defaultValue}
        editable={editable}
        onChangeText={value => onChange(value)}
        value={value}
        placeholder={placeholder}
        style={inputStyles}
      />
    </View>
  );
};
