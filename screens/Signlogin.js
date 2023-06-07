/*import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  //signupPressed = ()=>{
    //Alert.alert("Completed Sign Up")
  //}

  //loginPressed = ()=> {
    //Alert.alert("Completed Login!")
  //}

  render() {
    return (
      <ImageBackground
        source={require('../assets/test.png')}
        //resizeMode='contain'
      >
        <View>
        <Image style={styles.logo}>
          </Image>
          <Text style={styles.text}>First time being here? Start by signing up</Text>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    signlogin: {
      width: '100%',
      height: '100%',
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'black',
      marginTop: '-5%',
      marginLeft: '20%',
      fontWeight: 'bold',
    
    },
    signup: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '70%'
    },
    login: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const backgroundImage = require('../assets/test.png');

export default function LoginSignupScreen() {

  return (
    <ImageBackground source={backgroundImage} style={styles.background}
    resizeMode='repeat'>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Are you a new user or returning user?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Sign up button pressed")}>
            <Text style={styles.buttonText}>First Time? Click to Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Login button pressed")}>
            <Text style={styles.buttonText}>Already signed up? Click to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle: {
    fontSize: 20,
    color: '#fff'
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginBottom: 20,
    width: '100%',
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    marginTop:10 ,
    marginLeft: 50
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  }
});
