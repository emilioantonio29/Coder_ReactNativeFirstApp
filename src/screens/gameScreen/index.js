import React from 'react';
import {Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView} from 'react-native';
import HeaderComponent from '../../components/header';
import {styles} from './styles'
import Card from '../../components/card'
import InputComponent from '../../components/input';

const isIos = Platform.OS === 'ios';
const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max)
    const rdnNum = Math.floor(Math.random() * (max-min) + min)
    if(rdnNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rdnNum
    }
}

const GameScreen = ({userOptions, onStartGame}) =>{

    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1,100,userOptions));

    console.warn("El numero random es: "+ currentGuess)

    return(
        <>
            <View>
                <HeaderComponent title="Adivina el numero"></HeaderComponent>
                <Text></Text>
                <Card>
                    <Text style={{alignSelf:"center"}}>Numero seleccionado por el oponente: <Text style={{fontWeight:"bold"}}>{userOptions}</Text></Text>
                    <Text style={{alignSelf:"center"}}>¿El numero random es?</Text>
                    <View style={{padding: 10}}>
                        <Button 
                            title='Menor'
                            onPress={()=>{}}
                            color='grey'
                        />
                        <Text></Text>
                        <Button
                            title='Mayor'
                            onPress={()=>{}}
                            color='#0b5345'
                        />
                    </View>
                </Card>
                <Card>
                    <View style={{padding: 10}}>
                        <Text></Text>
                        <Button
                            title='Reiniciar Juego'
                            onPress={()=>{onStartGame(null)}}
                            color='black'
                        />
                    </View>
                </Card>
            </View>
        </>
    )
}

export default GameScreen;