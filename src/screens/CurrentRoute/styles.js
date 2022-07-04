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
  routeHelper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: styles.padding.p24,
  },
});
