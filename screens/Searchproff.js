/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
    
    const Searchproff = () => {
      const [searchQuery, setSearchQuery] = useState('');
    
      const handleSearch = () => {
        // Perform search logic here
        console.log('Search query:', searchQuery);
        // You can implement API calls or other search functionality
    
        // Reset the search query after performing search
        setSearchQuery('');
      };
    
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Professional name or expertise"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingTop: 25,
        marginLeft: 10,
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
      },
      button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    
    export default Searchproff;
    */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Searchproff = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Search query:', searchQuery);
    // You can implement API calls or other search functionality

    // Reset the search query after performing search
    setSearchQuery('');
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Professional name or expertise"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,  
    resizeMode: 'cover', // or 'stretch' for different image resizing options
    
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 25,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a transparent background color to the input
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Searchproff;


