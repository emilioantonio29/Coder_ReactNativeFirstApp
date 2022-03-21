import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 25, 
      backgroundColor: "grey",
      flex: 1, //El contenido ocupa todo el espacio disponible en la pantalla
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center"
    },
    textInput:{
      borderColor: "black", 
      borderWidth: 3,
      height: 36,
      color: "white",
      width: "70%"
    }
})