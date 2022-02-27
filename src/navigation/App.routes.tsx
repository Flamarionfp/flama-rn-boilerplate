import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './TabBar.routes';
import Drawer from './Drawer.routes';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
      <AppStack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
