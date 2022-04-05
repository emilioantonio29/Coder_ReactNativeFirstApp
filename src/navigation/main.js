import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home';
import Categorias from '../categoriaProductos';
import Detalle from '../detalleProductos';
import ListadoProductos from '../listadoProductos';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Categorias' component={Categorias}/>
            <Stack.Screen name='Detalle' component={Detalle}/>
            <Stack.Screen name='ListadoProductos' component={ListadoProductos}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;