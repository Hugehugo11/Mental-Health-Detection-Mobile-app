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
import SettingsScreen from './Settings';
import AboutScreen from './About';
import Profflogin from './Profflogin';
import Homeproff from './Homeproff';
import Library from './Library';
import TodoListScreen from './Todolists';
import Addtodo from './Addtodo';
import Addtodoproff from './Addtodoproff';


const Stack = createNativeStackNavigator();

export default function MyStack()
{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Firstscreen" component={Firstscreen} options={{headerShown:false}}/>
            <Stack.Screen name="Usertypescreen" component={Usertypescreen} options={{headerShown:false}}/>
            <Stack.Screen name="LoginSignupScreen" component={LoginSignupScreen}/>
            <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}}/>
            <Stack.Screen name="Clientregistration" component={Clientregistration} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={TabNavigation} options={{headerShown:false}}/>
            <Stack.Screen name="Profflogin" component={Profflogin} options={{headerShown:false}}/>
            <Stack.Screen name="Homeproff" component={Homeproff} options={{headerShown:false}}/>
            <Stack.Screen name="About" component={AboutScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Library" component={Library} options={{headerShown:false}}/>
            <Stack.Screen name="Addtodo" component={Addtodo} options={{headerShown:false}}/>
            <Stack.Screen name="Addtodoproff" component={Addtodoproff} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}