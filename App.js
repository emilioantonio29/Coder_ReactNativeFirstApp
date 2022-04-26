/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store/index'
import { GlobalProvider } from './src/context';

const App = () => {

  return (
    <Provider store={store}>
      <GlobalProvider>
        <AppNavigation/>
      </GlobalProvider>
    </Provider>
  );
};



export default App;
