/*import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';


export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
*/

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const handleSearch = () => {
    // handle search logic
    navigation.navigate('Search');
  };

  const handleTodo = () => {
    // handle todo logic
    navigation.navigate('Todo');
  };

  const handleMessage = () => {
    // handle message logic
    navigation.navigate('Message');
  };

  const handleLibrary = () => {
    // handle library logic
    navigation.navigate('Library');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton} disabled={true}>
        <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
        <Text style={styles.welcomeMessage}>Welcome UserX</Text>
        <Text style={styles.gender}>Gender: Female</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Image source={require('../assets/search.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Search for Professionals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTodo}>
        <Image source={require('../assets/todo.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Todo Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMessage}>
        <Image source={require('../assets/message.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.libraryButton} onPress={handleLibrary}>
        <Image source={require('../assets/library.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Library</Text>
      </TouchableOpacity>
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
  profileButton: {
    alignItems: 'center',
    marginBottom: 2,
    width: '100%',
    
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  
  },
  gender: {
    fontSize: 18,
    marginTop: 5,
    color: 'black',
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 200,
    height: 60,
  },
  libraryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 200,
    height: 50,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 50,
    height: 50,
    
  },
});

export default HomeScreen;
