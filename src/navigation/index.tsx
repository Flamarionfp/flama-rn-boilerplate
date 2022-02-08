import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '@screens/Home';
import Signin from '@screens/Signin';

import StackProps from './Stack.types';
import TabProps from './Tab.types';
import DrawerProps from './Drawer.types.';

const Stack = createNativeStackNavigator<StackProps>();
const Tab = createBottomTabNavigator<TabProps>();
const Drawer = createDrawerNavigator<DrawerProps>();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const DrawerLeft: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabBar} />
    </Drawer.Navigator>
  );
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DrawerLeft} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
