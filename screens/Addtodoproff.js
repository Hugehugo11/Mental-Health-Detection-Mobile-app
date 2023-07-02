import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';

const Addtodoproff = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { fetchTodoList } = route.params;

  const handleAddTodo = async () => {
    try {
      const response = await axios.post('http:///192.168.43.77:70/api/todoproff', {
        title,
        description,
        selectedDate,
      });

      setSuccessMessage('Todo added successfully');
      console.log('Todo added successfully:', response.data);
      
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log('Validation errors:', error.response.data);
      } else {
        console.error('Error adding todo:', error);
      }
    }
    fetchTodoList();
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.grayContainer}>
          <Text style={styles.title}>Add new todo item</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Todo item title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter todo item title"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Todo item description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter todo item description"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Scheduled for</Text>
            <Calendar
              onDayPress={(day) => setSelectedDate(day.dateString)}
            />
            {selectedDate !== '' && (
              <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          {successMessage !== '' && (
            <Text style={styles.successMessage}>{successMessage}</Text>
          )}
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDateText: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
  },
});

export default Addtodoproff;
