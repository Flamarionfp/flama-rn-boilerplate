import React from 'react';
import { useColorScheme } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/Home';
import DrawerExample from '@screens/DrawerExample';
import TabBarProps from './Tab.types';

const Tab = createBottomTabNavigator<TabBarProps>();

const TabBar: React.FC = () => {
  const colorScheme = useColorScheme();

  const screenOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
      backgroundColor: colorScheme === 'light' ? 'white' : '#121212',
      borderTopColor: 'transparent',
      paddingBottom: 6,
    },
    tabBarActiveTintColor: colorScheme === 'light' ? '#218c00' : 'white',
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Icon name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="DrawerExample"
        component={DrawerExample}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => <Icon name="menu" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
