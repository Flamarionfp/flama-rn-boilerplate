import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import theme from './theme';
import Navigation from './navigation/index';
import { AuthProvider } from './contexts/Auth';

const App = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </AuthProvider>
  );
};

export default App;
