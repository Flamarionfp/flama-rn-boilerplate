import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '@screens/Home';
import DrawerProps from './Drawer.types.';

const Drawer = createDrawerNavigator<DrawerProps>();

const DrawerLeft: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerLeft;
