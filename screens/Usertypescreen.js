import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class Firstscreen extends Component {
  constructor(props) {
    super(props);
  }

  handleClientPressed = () => {
    // navigate to the client registration screen
    this.props.navigation.navigate('Clientregistration');
  }

  handleProfessionalPressed = () => {
    // navigate to the professional registration screen
    this.props.navigation.navigate('Registration');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mental Health Detection App</Text>
        <Image source={require('../assets/usertype.jpeg')} style={styles.image} />
        <Text style={styles.subtitle}> You Are almost There!!</Text>
        <Text style={styles.quote}>"The only way out of the labyrinth of suffering is to forgive."</Text>
        <Text style={styles.quoteAuthor}>- John Green, Looking for Alaska</Text>
        <Text style={styles.quote}>"The strongest people are not those who show strength in front of us but those who win battles we know nothing about."</Text>
        <Text style={styles.quoteAuthor}>- Jonathan Harnisch, The Brutal Truth</Text>
        <TouchableOpacity style={styles.clientButton} onPress={this.handleClientPressed}>
          <Text style={styles.buttonText}>I'm a client</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.professionalButton} onPress={this.handleProfessionalPressed}>
          <Text style={styles.buttonText}>I'm a professional</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal:10 ,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 5,
    color: 'black',
  },
  quoteAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  clientButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  professionalButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Firstscreen;
