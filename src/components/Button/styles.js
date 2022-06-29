import EStylesheet from 'react-native-extended-stylesheet';
import {styles} from '../../constants';

const baseButton = {
  paddingHorizontal: styles.padding.p6,
  margin: styles.margin.m2,
  height: styles.height.h13,
  borderRadius: 6,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

export default EStylesheet.create({
  primaryButton: {
    ...baseButton,
    backgroundColor: styles.colors.blue.two,
    borderColor: styles.colors.black.five,
    borderWidth: 2,
  },
  primaryButtonText: {
    fontSize: styles.fontSize.lg,
    color: styles.colors.white.one,
    fontWeight: styles.fontWeight.bold,
  },
  secondaryButton: {
    ...baseButton,
    backgroundColor: styles.colors.green.one,
    borderColor: styles.colors.black.five,
    borderWidth: 2,
  },
  secondaryButtonText: {
    fontSize: styles.fontSize.lg,
    color: styles.colors.black.five,
    fontWeight: styles.fontWeight.bold,
  },
  textButton: {
    ...baseButton,
  },
  textButtonText: {
    fontSize: styles.fontSize.lg,
    color: styles.colors.black.five,
    fontWeight: styles.fontWeight.bold,
  },
  disabledButton: {
    ...baseButton,
    backgroundColor: styles.colors.white.three,
    borderColor: styles.colors.black.five,
    borderWidth: 2,
  },
  disabledButtonText: {
    fontSize: styles.fontSize.lg,
    color: styles.colors.black.five,
    fontWeight: styles.fontWeight.bold,
  },
});
