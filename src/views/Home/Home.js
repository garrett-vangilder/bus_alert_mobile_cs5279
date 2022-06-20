import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {Button} from '../../components';

const Home = props => (
  <View style={styles.container}>
    <Text>Buttons</Text>
    <Button
      text={'Submit'}
      onPress={() => console.log('PRESSED')}
      disabled={false}
      style={'primary'}
    />
    <Button
      text={'Submit'}
      onPress={() => console.log('PRESSED')}
      disabled={false}
      style={'secondary'}
    />

    <Button
      text={'Submit'}
      onPress={() => console.log('PRESSED')}
      disabled={false}
      style={'text'}
    />
  </View>
);

export default Home;
