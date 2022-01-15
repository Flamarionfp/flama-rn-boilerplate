import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import store from './redux/store';
import Navigation from './navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
