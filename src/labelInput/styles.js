import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerDisabled:{
        flex: 1,
        opacity: 0.5
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: "green",
        paddingVertical: 10
    },
    messageText:{
        color: "red",
        fontSize:12,
        marginVertical: 5
    }
})