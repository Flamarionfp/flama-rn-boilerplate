import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from '@screens/Signin';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={Signin} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export default AuthRoutes;
