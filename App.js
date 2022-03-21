/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import {styles} from "./styles"


const App = () => {

  const [texto, setTexto] = React.useState("");

  const onChangeText = () =>{
    setTexto(value)
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          // style={styles.input}
          // onChangeText={onChangeText}
          // value={null}
          placeholder='Type here your name'
          autoCorrect={false}
          autoFocus={true} //levanta el teclado automaticamente
          style={styles.textInput}
          placeholderTextColor="white"
        />
        <Button
          title="Agregar"
          color="purple"
          onPress={()=>alert("ok")}
        />

      </View>
    </>
  );
};



export default App;
