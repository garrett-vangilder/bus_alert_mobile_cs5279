import EStylesheet from 'react-native-extended-stylesheet';

import {styles} from '../../constants';

export default EStylesheet.create({
  container: {
    height: styles.height.full,
    paddingHorizontal: styles.padding.p2,
  },
});
