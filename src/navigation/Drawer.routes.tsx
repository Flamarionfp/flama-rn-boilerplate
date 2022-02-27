import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '@screens/Home';
import DrawerProps from './Drawer.types.';

const NavigationDrawer = createDrawerNavigator<DrawerProps>();

const Drawer: React.FC = () => {
  return (
    <NavigationDrawer.Navigator>
      <NavigationDrawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </NavigationDrawer.Navigator>
  );
};

export default Drawer;
