import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import TabBarProps from './Tab.types';

const Tab = createBottomTabNavigator<TabBarProps>();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabBar;
