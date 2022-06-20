import React from 'react';

import {SafeAreaView} from 'react-native';
import {Home} from './views';
import {styles} from './constants';

const App = () => (
  <SafeAreaView style={{backgroundColor: styles.colors.white.one}}>
    <Home />
  </SafeAreaView>
);
export default App;
