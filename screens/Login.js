import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground} from 'react-native';


  const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const backgroundImage = require('../assets/test.png');

  const handleLogin = () => {
    // Here you can add your login logic. For example, you could send a
    // request to your server with the username and password and check if
    // they match a user in your database.

    // If the login is successful, you can navigate to the home screen
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}
    resizeMode='repeat'>
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.label}>
        <Text style={styles.label}>Enter your username</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
       <View style={styles.label}>
      <Text style={styles.label}>Enter your password</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <View>
      <Button title="Login" onPress={handleLogin}
      style={styles.button} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white' ,
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
    paddingRight: 90 ,
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40,
    width : '100%',
  },


});

export default Login;
