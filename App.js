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
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from './src/components/header/index.js';
import {styles} from './styles'
import StartGameScreen from './src/screens/startGameScreen/index.js';
import GameScreen from './src/screens/gameScreen/index.js'

console.warn(Platform.OS)
const isIos = Platform.OS === 'ios';

const App = () => {

  const [userNumber, setUserNumber] = React.useState()

  const handleStartGame = (selecteddNumber) =>{
    selecteddNumber == null ? setUserNumber() : setUserNumber(selecteddNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber){
    content = <GameScreen userOptions={userNumber} onStartGame={handleStartGame}/>
  }

  return (
    <>
      {isIos ? console.log("si") : console.log("no")}
      {/* <View style={{borderColor: '#FF3D00', borderWidth: 5}}> */}
      <View>
          {content}
      </View>
    </>
  );
};


export default App;
