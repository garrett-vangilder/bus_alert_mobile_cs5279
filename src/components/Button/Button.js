import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';

export default ({disabled, onPress, style, text}) => {
  let buttonStyle;
  let buttonText;
  switch (style) {
    case 'secondary':
      buttonStyle = styles.secondaryButton;
      buttonText = styles.secondaryButtonText;
      break;
    case 'text':
      buttonStyle = styles.textButton;
      buttonText = styles.textButtonText;
      break;
    case 'primary':
    default:
      buttonStyle = styles.primaryButton;
      buttonText = styles.primaryButtonText;
  }

  return (
    <TouchableWithoutFeedback
      accessibilityLanguage={text}
      disabled={disabled}
      onPress={() => onPress && onPress()}>
      <View style={buttonStyle}>
        <Text style={buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
