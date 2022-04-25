import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home';
import Categorias from '../categoriaProductos';
import Detalle from '../detalleProductos';
import ListadoProductos from '../listadoProductos';
import { Platform, Button } from 'react-native'
import {colors} from '../constants/themes'
import TestView from '../testView';
import Cart from '../cart/index'
import Auth from '../auth';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName='Auth'
            screenOptions={{
                headerShown: false
            }}
            
        >
            <Stack.Screen name='Auth' component={Auth}/>
            {/* <Stack.Screen name='Categorias' 
                component={Categorias}
                options={({route}) => ({title: route.params.title})}
            /> */}
        </Stack.Navigator>
    )
}

export default AuthNavigator;