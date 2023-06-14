import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';

const Addtodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [scheduledFor, setScheduledFor] = useState('');

  const handleAddTodo = () => {
    // Perform the necessary actions to add the todo to the MySQL database
    // You can customize this function according to your database implementation
    // You may use an API call or any other method to communicate with the database

    // Display a success message or navigate back to the previous screen
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
              value={todoTitle}
              onChangeText={setTodoTitle}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Todo item description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter todo item description"
              value={todoDescription}
              onChangeText={setTodoDescription}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Scheduled for:</Text>
            {/* Implement calendar component here to select date */}
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
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
});

export default Addtodo;
