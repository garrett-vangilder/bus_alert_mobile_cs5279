import EStylesheet from 'react-native-extended-stylesheet';

import {styles} from '../../constants';

export default EStylesheet.create({
  container: {
    height: styles.height.full,
    backgroundColor: styles.colors.yellow.one,
    borderColor: 'green',
    borderWidth: 1,
  },
  pageContainer: {
    height: styles.height.full,
    borderColor: 'red',
    borderWidth: 1,
  },
  flexOne: {
    flex: 1,
  },
});
