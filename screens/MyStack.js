import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import Firstscreen from './Firstscreen';
import LoginSignupScreen from './Signlogin';
import Usertypescreen from './Usertypescreen';
import Registration from './Registration';
import Clientregistration from './Clientregistration';
import Login from "./Login";
import Home from "./Homescreen";
import TabNavigation from './TabNavigation';
import HomeScreen from './Homescreen';


const Stack = createNativeStackNavigator();

export default function MyStack()
{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Firstscreen" component={Firstscreen} options={{headerShown:false}}/>
            <Stack.Screen name="Usertypescreen" component={Usertypescreen} options={{headerShown:false}}/>
            <Stack.Screen name="LoginSignupScreen" component={LoginSignupScreen}/>
            <Stack.Screen name="Registration" component={Registration}/>
            <Stack.Screen name="Clientregistration" component={Clientregistration} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={TabNavigation} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}