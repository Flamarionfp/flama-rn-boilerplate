import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Test from '../screens/Test'

import StackProps from '../types/StackProps'

const Stack = createNativeStackNavigator<StackProps>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation