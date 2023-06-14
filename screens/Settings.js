import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';



const SettingsScreen = ({ navigation }) => {
    const [darkTheme, setDarkTheme] = useState(false);
  
    const handleToggleTheme = () => {
      setDarkTheme(!darkTheme);
    };
  
    const handleDeleteAccount = () => {
      // Implement the logic to delete the account here
    };
    
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
  
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Change Theme</Text>
          <Switch value={darkTheme} onValueChange={handleToggleTheme} />
        </View>
  
        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    button: {
      backgroundColor: '#f0f0f0',
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
  


/*import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useNavigation } from 'react-native';

const SettingsScreen = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic here
  };

  return (
    <View
      style={[
        styles.container,
        darkTheme ? styles.darkThemeContainer : styles.lightThemeContainer
      ]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Change Theme</Text>
        <TouchableOpacity style={styles.switchButton} onPress={handleToggleTheme}>
          <Text>{darkTheme ? 'Dark' : 'Light'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleDeleteAccount}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  lightThemeContainer: {
    backgroundColor: '#ffffff',
  },
  darkThemeContainer: {
    backgroundColor: '#333333',
  },
  button: {
    backgroundColor: '#f0f0f0',
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
  switchButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
});

export default SettingsScreen;
*/



