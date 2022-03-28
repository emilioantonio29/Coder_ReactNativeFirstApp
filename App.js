/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from './src/components/header/index.js';
import {styles} from './styles'
import StartGameScreen from './src/screens/startGameScreen/index.js';

console.warn(Platform.OS)
const isIos = Platform.OS === 'ios';

const App = () => {

  return (
    <>
      {isIos ? console.log("si") : console.log("no")}
      {/* <View style={{borderColor: '#FF3D00', borderWidth: 5}}> */}
      <View>
        <StartGameScreen/>
      </View>
    </>
  );
};


export default App;
