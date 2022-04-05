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
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window')
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
import useOrientation from './src/hooks/useOrientation'

console.warn(Platform.OS)
// console.warn(width, height) // screen: 320 533.3333333333334
// console.warn(width, height) // windows: 320 533.3333333333334

const isIos = Platform.OS === 'ios';

const App = () => {
  const orientation = useOrientation();
  const [userNumber, setUserNumber] = React.useState()
  const [rondas, setRondas] = React.useState(0)
  const [rondasGanadas, setRondasGanadas] = React.useState(0)

  const handleRondas = (jugadas, cantGanadas) =>{
    cantGanadas ? setRondasGanadas(rondasGanadas+cantGanadas) && setRondas(rondas+jugadas) : setRondas(rondas+jugadas)
  }

  const handleStartGame = (selecteddNumber) =>{
    selecteddNumber == null ? setUserNumber() : setUserNumber(selecteddNumber)
  }

  let content = <StartGameScreen  onStartGame={handleStartGame} />

  if(userNumber){
    content = <GameScreen rondas={handleRondas} userOptions={userNumber} onStartGame={handleStartGame}/>
  }

  console.log(`orientacion: ${orientation.isPortrait} ` , orientation)
  return (
    <>
      {isIos ? console.log("si") : console.log("no")}
      {/* <View style={{borderColor: '#FF3D00', borderWidth: 5}}> */}
      <View>
          {content}
      </View>
      <View style={{justifyContent: "center"}}>
        <Text style={{justifyContent: "center", alignSelf: "center"}}>Rondas Jugadas: {rondas} - Rondas Ganadas: {rondasGanadas}</Text>
      </View>
    </>
  );
};


export default App;
