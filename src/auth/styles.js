import {StyleSheet} from 'react-native';
import { colors } from '../constants/themes';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: colors.backgroundColorAuth,
        borderColor: "red"
    },
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 0.2,
        padding: 10,
    }
})