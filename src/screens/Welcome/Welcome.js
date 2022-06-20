import React from 'react';
import {Text, View} from 'react-native';

import {Button} from '../../components';

export default props => (
  <View>
    <View>
      <Text>Welcome Screen</Text>
    </View>
    <View>
      <Button text={'To Current Route'} />
    </View>
  </View>
);
