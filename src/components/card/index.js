import React from 'react';
import {View} from 'react-native';
import {styles} from './styles'

const Card = ({children, style}) =>{
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Card;