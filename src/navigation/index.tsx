import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home'
import Test from '../screens/Test'

import StackProps from '../types/StackProps'
import TabProps from '../types/TabProps'
import DrawerProps from '../types/DrawerProps'

const Stack = createNativeStackNavigator<StackProps>();
const Tab = createBottomTabNavigator<TabProps>();
const Drawer = createDrawerNavigator<DrawerProps>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DrawerLeft} options={{ headerShown: false }} />
        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Test" component={Test} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const DrawerLeft: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabBar} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  )
}

export default Navigation