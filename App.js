//import 'react-native-gesture-handler';
import React from 'react';

import {View, Text, Image, Button, StyleSheet } from 'react-native';
import Firstscreen from './screens/Firstscreen';
import Registration from './screens/Registration';
import Clientregistration from './screens/Clientregistration';
import Login from './screens/Login';
import Homescreen from './screens/Homescreen';
import ReviewDetails from './screens/Reviewdetails';
import About from './screens/About';
import Signlogin from './screens/Signlogin';
import Logout from './screens/Logout';
import MyStack from './screens/MyStack';
//import DrawerNavigation from './screens/DrawerNavigation';

const App = () => {
  return (
  <MyStack/>
  //<Firstscreen/>
  //<Signlogin/>
  //<Usertypescreen/>
  //<Registration/>
   //<Clientregistration/>
   //<Login/>
    //<Homescreen/>
    //<ReviewDetails/>
    //<About/>
  );
};


export default App;
