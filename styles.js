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
    textInput:{
      borderColor: "black", 
      borderWidth: 3,
      height: 36,
      color: "white",
      width: "70%"
    },
    containerList:{
      paddingHorizontal: 25
    },
    textList:{
      fontSize: 14,
      color: "white"
    },
    modalTitle:{
      fontSize: 14,
      color: "black",
      // marginBottom: 10,
      padding: 25
    },
    modalContent:{
      padding: 25
    },
    modalButton:{
      marginTop: 10,
      marginBottom: 10
    },
    modalContainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalContentText:{
      fontSize:14,
      color: "purple",
      fontWeight: "bold"
    }
})