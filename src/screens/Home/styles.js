import {StyleSheet} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

import {styles} from '../../constants';

export default EStylesheet.create({
  container: {
    height: styles.height.full,
    paddingHorizontal: styles.padding.p2,
  },
  separator: {
    marginVertical: styles.margin.m8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontWeight: styles.fontWeight.medium,
    fontSize: styles.fontSize.xl,
    marginVertical: styles.margin.m3,
  },
});
