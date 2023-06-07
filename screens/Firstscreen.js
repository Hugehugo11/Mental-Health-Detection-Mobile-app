import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mental Health Detection App</Text>
      <Image source={require('../assets/firstscreen.jpeg')} style={styles.image} />
      <View  style={styles.txtContainer}>
      <Text style={styles.boldText}> Liberate Me! </Text>
      </View>
      <View>
      <Text style={styles.boldText}> Recovery is an evolution not a miracle </Text>
      </View>
      <View style={styles.btnContainer}>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Usertypescreen')}
        style={styles.button}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 90,
  },
  boldText: {
    fontSize: 20 ,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 100,
  },
  button: {
    //width: 200,
    //height: 50,
    //borderRadius: 10,
    //backgroundColor: '#841584',
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 40,
    width : '100%',

  },
  txtContainer:{
    //backgroundColor:'red',
    padding:40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer:{
    //backgroundColor:'yellow',
    padding:40,
    width : '100%',
  }
});

export default HomeScreen;


// FirstScreen.js
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Firstscreen extends Component {
  constructor(props) {
    super(props);
  }

  handleGetStartedPressed = () => {
    this.props.navigation.navigate('Usertypescreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mental Health Detection App</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleGetStartedPressed}>
          <Text style={styles.buttonText}>Get Started</Text>
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
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
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
*/