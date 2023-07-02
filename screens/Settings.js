import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleDeleteAccount = () => {
    // Implement the logic to delete the account here
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        {/*
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Change Theme</Text>
          <Switch value={darkTheme} onValueChange={handleToggleTheme} />
        </View>
  */}
        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: 'darkgray',
    padding: 16,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 15,
  },
  switchLabel: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
