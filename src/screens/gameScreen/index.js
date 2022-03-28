import React from 'react';
import {Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView, Modal, Pressable} from 'react-native';
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
    const [modalVisible, setModalVisible] = React.useState(false);
    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1,100,userOptions));
    const [message, setMessage] = React.useState("");

    const checkNumber = (type) =>{
        setModalVisible(true)
        if(type == "menor"){
            currentGuess < userOptions ? setMessage(`¡FELICIDADES!, el numero random es menor al seleccionado (${currentGuess})`) : setMessage(`¡GAME OVER!. El numero random es mayor (${currentGuess})`)
        }else{
            currentGuess > userOptions ? setMessage(`¡FELICIDADES!, el numero random es mayor al seleccionado (${currentGuess})`) : setMessage(`¡GAME OVER!. El numero random es menor (${currentGuess})`)
        }
        
    }

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
                            onPress={()=>{checkNumber("menor")}}
                            color='grey'
                        />
                        <Text></Text>
                        <Button
                            title='Mayor'
                            onPress={()=>{checkNumber("mayor")}}
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
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{message}</Text>
                        <View style={{padding: 10}}>
                        <Text></Text>
                            <Button
                                title='Volver a Jugar'
                                onPress={()=>{onStartGame(null)}}
                                color='#0b5345'
                            />
                            <Button
                                title='Cerrar modal'
                                onPress={()=>{setModalVisible(false)}}
                                color=''
                            />
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}


export default GameScreen;