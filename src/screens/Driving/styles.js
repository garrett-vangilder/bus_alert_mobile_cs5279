import EStylesheet from 'react-native-extended-stylesheet';

import {styles} from '../../constants';

export default EStylesheet.create({
  container: {
    height: styles.height.full,
    backgroundColor: styles.colors.white.one,
  },
  pageContainer: {
    height: styles.height.full,
  },
  routeData: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: styles.padding.p24,
  },
  routeLog: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styles.colors.white.two,
  },
  routeItem: {
    padding: styles.padding.p2,
    marginHorizontal: styles.margin.m1,
  },
  text: {
    color: styles.colors.black.five,
    fontFamily: styles.fontFamily.firaSansRegular,
  },
});
