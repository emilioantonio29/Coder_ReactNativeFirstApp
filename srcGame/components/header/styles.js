import {StyleSheet} from 'react-native'; 

export const styles = StyleSheet.create({
    container: {
        //flex: 1, // ocupa todo el espacio disponible segun los elementos que se encuentran en pantalla
        flexGrow: 0.2, // cuanto espacio ocupa del espacio en total (20%, 0.2 de 1)
        justifyContent: 'center',
        alignContent: 'center',
        height: 100,
        backgroundColor: 'grey'
    },
    title:{
        fontFamily: "SourceCodePro-SemiBold",
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "white",
        // fontWeight: 'bold'
    }
});