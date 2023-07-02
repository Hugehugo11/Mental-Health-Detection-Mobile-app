import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';

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
import Todolists from './screens/Todolists';
import Addtodo from './screens/Addtodo';

const App = () => {
  return (
    
      <View style={styles.container}>
        {/* Your components go here */}
        <MyStack />
        {/* <About />
        <Firstscreen />
        <Signlogin />
        <Registration />
        <Clientregistration />
        <Login />
        <Homescreen />
        <ReviewDetails /> */}
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
