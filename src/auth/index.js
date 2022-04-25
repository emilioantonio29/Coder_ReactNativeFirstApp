import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput} from 'react-native';
import { styles } from './styles';

const Auth = ({natigation}) => {
    const [text, onChangeText] = React.useState("");
    return(
        <KeyboardAvoidingView style={styles.container}
            behavior="position"
            //keyboardVerticalOffset={50}
            //enabled
            >
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>Auth</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
        </KeyboardAvoidingView>
    )
}


export default Auth;