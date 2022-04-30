import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from './main'
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';
const AppNavigation = () =>{
    const [user, setUser] = React.useState(null)
    //useSelector(state=>state.loading).then((data)=>setHandleLoading(data.loading))
    const [showMain, setShowMain] = React.useState("");
    const isAuth = useSelector(state => state.auth).then((data)=>setShowMain(data.userId))
    console.log("auth",isAuth)
    return(
        <NavigationContainer>
            {showMain ? <MainNavigator/> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigation;