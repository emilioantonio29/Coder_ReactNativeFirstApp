import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from './main'
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';
const AppNavigation = () =>{
    const [user, setUser] = React.useState(null)
    const isAuth = useSelector(state => state.auth.userId)
    return(
        <NavigationContainer>
            {isAuth ? <MainNavigator/> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigation;