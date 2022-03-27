import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerInput: {
      padding: 25, 
      backgroundColor: "grey",
      //flex: 1, //El contenido ocupa todo el espacio disponible en la pantalla
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center"
    },
    container:{
      flex:1,
      padding: 25, 
      backgroundColor: "grey",
    },
    containerList:{
      paddingHorizontal: 25
    },
    textList:{
      fontSize: 14,
      color: "white"
    }
})