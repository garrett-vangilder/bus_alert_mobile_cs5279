import React from 'react';
import {Text, View} from 'react-native';

import {Button} from '../../components';

export default props => (
  <View>
    <View>
      <Text>Current Route Screen</Text>
    </View>
    <View>
      <Button text={'Back'} />
    </View>
  </View>
);
