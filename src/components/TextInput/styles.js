import EStylesheet from 'react-native-extended-stylesheet';
import {styles} from '../../constants';

export default EStylesheet.create({
  uneditableContainer: {
    backgroundColor: styles.colors.white.four,
    borderColor: styles.colors.black.five,
  },
  container: {
    margin: styles.margin.m2,
    backgroundColor: styles.colors.white.two,
    borderColor: styles.colors.black.five,
    borderWidth: 2,
    borderRadius: 3,
    padding: styles.padding.p2,
  },
  label: {
    fontWeight: styles.fontWeight.medium,
    fontSize: styles.fontSize.xs,
    color: styles.colors.black.five,
    textTransform: 'uppercase',
  },
  uneditableLabel: {
    color: styles.colors.black.three,
  },
  input: {
    fontSize: styles.fontSize.base,
    color: styles.colors.black.five,
    paddingHorizontal: styles.padding.p2,
    paddingTop: styles.padding.p1,
    fontWeight: styles.fontWeight.bold,
  },
  uneditableInput: {
    color: styles.colors.black.three,
  },
});
