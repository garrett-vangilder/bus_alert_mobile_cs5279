import React from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './views';
import {styles} from './constants';

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={{backgroundColor: styles.colors.white.one}}>
      <Home />
    </SafeAreaView>
  </NavigationContainer>
);
export default App;
