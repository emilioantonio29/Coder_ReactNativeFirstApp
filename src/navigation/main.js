import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home';
import Categorias from '../categoriaProductos';
import Detalle from '../detalleProductos';
import ListadoProductos from '../listadoProductos';
import { Platform } from 'react-native'
import {colors} from '../constants/themes'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === "android" ? colors.primaryColor : '',
                },
                headerTintColor: Platform.OS === "android" ? 'white' : colors.primaryColor,
                headerTitleStyle: {fontFamily: "SourceCodePro-Black", fontSize: 17}
            }}
            
        >
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Categorias' 
                component={Categorias}
                options={({route}) => ({title: route.params.title})}
            />
            {/* <Stack.Screen name='Detalle' component={Detalle}/> */}
            <Stack.Screen name='ListadoProductos' 
                component={ListadoProductos}
                options={({route}) => ({title: route.params.title})}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;