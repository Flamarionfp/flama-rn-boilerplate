import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './theme';
import Navigation from './navigation/index';
import { AuthProvider } from './contexts/Auth';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
