import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home';
import Categorias from '../categoriaProductos';
import Detalle from '../detalleProductos';
import ListadoProductos from '../listadoProductos';
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform    
} from 'react-native'
import {colors} from '../constants/themes'



const CategoryGrid = ({item, onSelected}) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        let TouchablleCmp = TouchableNativeFeedback;
    }
    return(
        <View>
            <TouchableComponent 
                style={{backgroundColor:item.color}}
                onPress={()=> onSelected(item)}
            >
                <View>
                    <Text>{item.name}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

export default CategoryGrid;