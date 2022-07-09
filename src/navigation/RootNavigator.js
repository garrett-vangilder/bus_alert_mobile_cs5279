import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Driving, Welcome} from '../screens';

const Stack = createNativeStackNavigator();
export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Driving" component={Driving} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  </NavigationContainer>
);
