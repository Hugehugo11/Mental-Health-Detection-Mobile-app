import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import { url } from '../globals/Globals';
import { Picker } from '@react-native-picker/picker';

const Clientregistration = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleRegistration = async () => {
    if (!firstName || !lastName || !gender || !dob || !email || !phoneNumber || !userName || !password) {
      console.log('Please fill in all required fields');
      return;
    }

    if (password.length < 5) {
      console.log('Password should be at least 5 characters long');
      return;
    }

    try {
      const response = await axios.post(url + 'client-registration', {
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        dob: dob,
        email: email,
        phone_number: phoneNumber,
        username: userName,
        password: password,
      });

      console.log(response.data); // Assuming the Laravel API returns a response with a success message
      console.log('Registration successful');
      setRegistrationStatus('success');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error registering client:', error);
      console.log('Registration failed');
      setRegistrationStatus('failed');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <Text style={styles.successMessage}>Registration successful</Text>;
  } else if (registrationStatus === 'failed') {
    statusMessage = <Text style={styles.errorMessage}>Registration failed</Text>;
  } else if (password.length > 0 && password.length < 5) {
    statusMessage = <Text style={styles.errorMessage}>Password should be 5 characters or longer</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Client's Registration</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>What is your First Name?</Text>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />

            <Text style={styles.inputLabel}>What is your Last Name?</Text>
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />

            <Text style={styles.inputLabel}>Select your Gender</Text>
            <Picker
              selectedValue={gender}
              style={styles.input}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>

            <Text style={styles.inputLabel}>What is your Date of Birth? (yyyy-mm-dd)</Text>
            <TextInput
              placeholder="Date of Birth"
              style={styles.input}
              value={dob}
              onChangeText={(text) => setDob(text)}
            />

            <Text style={styles.inputLabel}>What is your Email?</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>What is your Phone Number?</Text>
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
            />

            <Text style={styles.inputLabel}>Choose a Username</Text>
            <TextInput
              placeholder="Client Username"
              style={styles.input}
              value={userName}
              onChangeText={(text) => setUserName(text)}
            />

            <Text style={styles.inputLabel}>Choose a Password (at least 5 characters)</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Password"
                style={styles.passwordInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <Button
                title={showPassword ? 'Hide' : 'Show'}
                onPress={toggleShowPassword}
                style={styles.showHideButton}
              />
            </View>

            <Button
              title="Register"
              onPress={handleRegistration}
              style={styles.button}
              disabled={!firstName || !lastName || !gender || !dob || !email || !phoneNumber || !userName || !password}
            />
            {statusMessage}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  inputLabel: {
    color: 'black',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  showHideButton: {
    marginLeft: 10,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
  successMessage: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Clientregistration;
