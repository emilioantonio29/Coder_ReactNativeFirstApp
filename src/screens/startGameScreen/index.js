import React from 'react';
import {Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView} from 'react-native';
import HeaderComponent from '../../components/header';
import {styles} from './styles'
import Card from '../../components/card'
import InputComponent from '../../components/input';

const isIos = Platform.OS === 'ios';

const StartGameScreen = ({onStartGame}) =>{

    const [inputValue, setInputValue] = React.useState("");
    const [confirmed, setConfirmed] = React.useState(false);
    const [selecteddNumber, setSelectedNumber] = React.useState("");


    const handleOnChange = (text) =>{
        console.warn(text)
        setInputValue(text.replace(/[^0-9]/g, ''))
    }
    const handleOnClearInput = () =>{
        setInputValue("");
        setSelectedNumber("")
    }

    const handleConfirmInput = () =>{
        const chosenNumber = parseInt(inputValue)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setInputValue("");
    }

    const confirmedOutput = confirmed ? (
        <Card style={{marginTop: 20}}>
            <Text style={styles.confirmedText}>Numero Seleccionado: {selecteddNumber}</Text>
            <View style={{padding: 10}}>
                <Button 
                    title='Empezar Juego'
                    onPress={()=>{onStartGame(selecteddNumber)}}
                    color='#0b5345'
                />
            </View>
        </Card>
        ) 
        : null

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            {/* <KeyboardAvoidingView
                behavior="height"
                styles={null}
            > */}
                <View style={styles.container}>
                    <HeaderComponent title="Selecciona un numero"/>
                    <Card>
                        <Text style={styles.title}>Empezar Juego</Text>
                        <Text style={{alignSelf:"center"}}>Elija un numero</Text>
                        <View style={{alignSelf:"center"}}>
                            <InputComponent 
                                style={{alignSelf:"center"}} 
                                placeholder='11' 
                                placeholderTextColor="#abb2b9"
                                maxLength={2}
                                handleOnChange={value => handleOnChange(value)}
                                blurOnSubmit // sale del foco del campo al agregar el dato
                                autoCapitalize='none' // primera letra en mayuscula
                                keyboardType='numeric'
                                autoCorrect={false}
                                returnKeyType='done'
                                value={inputValue}
                            />
                            <View style={{padding: 10}}>
                                <Button 
                                    title='limpiar'
                                    onPress={()=>{handleOnClearInput()}}
                                    color='grey'
                                />
                                <Text></Text>
                                <Button
                                    title='Confirmar'
                                    onPress={()=>{handleConfirmInput()}}
                                    color='#0b5345'
                                />
                            </View>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            {/* </KeyboardAvoidingView> */}
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;