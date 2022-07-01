import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CurrentRoute, Welcome} from '../screens';

const Stack = createNativeStackNavigator();
export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CurrentRoute" component={CurrentRoute} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  </NavigationContainer>
);
