import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import HeaderComponent from '../../components/header';
import {styles} from './styles'
import Card from '../../components/card'

const StartGameScreen = () =>{
    return(
        <View style={styles.container}>
            <HeaderComponent title="Adivina el numero"/>
            <Card>
                <Text style={styles.title}>Empezar Juego</Text>
                <Text style={{alignSelf:"center"}}>Elija un numero</Text>
                <View style={{alignSelf:"center"}}>
                     <TextInput 
                        style={{alignSelf:"center"}} 
                        placeholder='11' placeholderTextColor="#abb2b9"
                        maxLength={2}
                        
                    />
                    <View style={{padding: 10}}>
                        <Button 
                            title='limpiar'
                            onPress={()=>{}}
                            color='grey'
                        />
                        <Text></Text>
                        <Button
                            title='Confirmar'
                            onPress={()=>{}}
                            color='grey'
                        />
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;