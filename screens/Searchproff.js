import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

const Searchproff = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://192.168.0.115:70/api/searchprofessionals', {
        search: searchQuery
      });
      const results = response.data;
      setSearchResults(results);
    } catch (error) {
      console.log('Error searching professionals:', error);
    }
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

      {/* Render search results */}
      {searchResults.map((result) => (
        <View key={result.id}>
          <Text>{result.name}</Text>
          <Text>{result.expertise}</Text>
          {/* Render other relevant information */}
        </View>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
