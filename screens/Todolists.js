import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { url } from '../globals/Globals';

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const fetchTodoList = async () => {
    try {
      const response = await axios.get(
        url+'todos'
      );
      
      const todoList = response.data;
      setTodos(todoList);
      //console.log(todoList);

    } catch (error) {
        // This helps us to view and handle errors
      console.log('Error fetching to-do list:', error);
      
    }
    
  };

  useEffect(()=>{
    fetchTodoList();
    console.log("hello");
    console.log(todos);
  },[])



  const handleAddTodo = () => {
    if (todoTitle) {
      const newTodo = { id: Date.now(), title: todoTitle, description: '' };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoTitle('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };



  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.subHeaderText}>Below are your todo lists</Text>
            <Text style={styles.subHeaderText}>Click on the todo list title to view its description</Text>
          </View>
          <View style={styles.addTodoContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Addtodo')}>
              <Text style={styles.buttonText}>What do you have planned?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.todoListContainer}>
            {todos.map((todo) => (
              <View key={todo.id} style={styles.todoContainer}>
                <TouchableOpacity style={styles.todoTitleContainer}>
                  <Text style={styles.todoTitle}>{todo.title}</Text>
                </TouchableOpacity>
                <View style={styles.todoButtonsContainer}>
                  <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTodo(todo.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  subHeaderText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoListContainer: {
    flex: 1,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  todoTitleContainer: {
    flex: 1,
    marginRight: 10,
    
  },
  todoTitle: {
    fontSize: 16,
    color: 'white',
  },
  todoButtonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default TodoListScreen;
