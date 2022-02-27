import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import DrawerScreen from '@screens/DrawerScreen';
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerProps from './Drawer.types.';

const NavigationDrawer = createDrawerNavigator<DrawerProps>();

const Drawer: React.FC = () => {
  const colorScheme = useColorScheme();

  const drawerOptions: DrawerNavigationOptions = {
    drawerStyle: {
      backgroundColor: colorScheme === 'light' ? 'white' : '#121212',
      borderTopColor: 'transparent',
      paddingBottom: 6,
    },
    drawerActiveTintColor: colorScheme === 'light' ? '#f40' : 'white',
  };

  return (
    <NavigationDrawer.Navigator screenOptions={drawerOptions}>
      <NavigationDrawer.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ size, color }) => <Icon name="star" size={size} color={color} />,
        }}
      />
    </NavigationDrawer.Navigator>
  );
};

export default Drawer;
