import EStylesheet from 'react-native-extended-stylesheet';

import {styles} from '../../constants';

export default EStylesheet.create({
  container: {
    height: styles.height.full,
    backgroundColor: styles.colors.yellow.one,
  },
  pageContainer: {
    height: styles.height.full,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: styles.padding.p24,
  },
  title: {
    fontWeight: styles.fontWeight.medium,
    fontSize: styles.fontSize['4xl'],
    fontFamily: styles.fontFamily.firaSansBold,
    textAlign: 'center',
    color: styles.colors.black.five,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
});
