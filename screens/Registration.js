import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Registration = ({ navigation }) => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [expertise, setExpertise] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
      

  const handleRegistration = () => {
    // handle registration logic here
    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professionals Registration</Text>
    <TextInput
     placeholder="First Name"
     style={styles.input}
     value={firstName}
     onChangeText={(text) => setFirstName(text)}
/>
<TextInput
  placeholder="Last Name"
  style={styles.input}
  value={lastName}
  onChangeText={(text) => setLastName(text)}
/>
<TextInput
  placeholder="Gender"
  style={styles.input}
  value={gender}
  onChangeText={(text) => setGender(text)}
/>
<TextInput
  placeholder="Date of Birth"
  style={styles.input}
  value={dob}
  onChangeText={(text) => setDob(text)}
/>
<TextInput
  placeholder="Expertise"
  style={styles.input}
  value={expertise}
  onChangeText={(text) => setExpertise(text)}
/>
<TextInput
  placeholder="Email"
  style={styles.input}
  value={email}
  onChangeText={(text) => setEmail(text)}
  keyboardType="email-address"
  autoCapitalize="none"
/>
<TextInput
  placeholder="Phone Number"
  style={styles.input}
  value={phoneNumber}
  onChangeText={(text) => setPhoneNumber(text)}
  keyboardType="phone-pad"
/>
<TextInput
     placeholder="Professional Username"
     style={styles.input}
     value={userName}
     onChangeText={(text) => setName(text)}
/>
<TextInput
  placeholder="Password"
  style={styles.input}
  value={password}
  onChangeText={(text) => setPassword(text)}
  secureTextEntry={true}
/>
      
      <Button
        title="Register"
        onPress={handleRegistration}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  input: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
});

export default Registration;
