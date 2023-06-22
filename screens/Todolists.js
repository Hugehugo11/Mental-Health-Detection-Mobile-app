import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { url } from '../globals/Globals';

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchTodoList = async () => {
    try {
      const response = await axios.get(url + 'todos');
      const todoList = response.data;
      setTodos(todoList);
    } catch (error) {
      console.log('Error fetching to-do list:', error);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const handleAddTodo = () => {
    if (todoTitle) {
      const newTodo = { id: Date.now(), title: todoTitle, description: '', selectedDate: '' };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoTitle('');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(url + `todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  const handleEditTodo = (todo) => {
    setSelectedTodo(todo);
    setTodoTitle(todo.title);
    setTodoDescription(todo.description);
    setTodoDate(todo.selectedDate);
    setModalVisible(true);
  };

  const handleUpdateTodo = async () => {
    if (selectedTodo && todoTitle) {
      try {
        const updatedTodo = {
          ...selectedTodo,
          title: todoTitle,
          description: todoDescription,
          selectedDate: todoDate,
        };
        await axios.put(url + `todos/${selectedTodo.id}`, updatedTodo);
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === selectedTodo.id ? updatedTodo : todo))
        );
        setTodoTitle('');
        setTodoDescription('');
        setTodoDate('');
        setSelectedTodo(null);
        setModalVisible(false);
      } catch (error) {
        console.log('Error updating todo:', error);
      }
    }
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.backgroundContainer}>
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
          <ScrollView style={styles.todoListContainer}>
            {todos.map((todo) => (
              <View key={todo.id} style={styles.todoContainer}>
                <TouchableOpacity style={styles.todoTitleContainer}>
                  <Text style={styles.todoTitle}>{todo.title}</Text>
                  <Text style={styles.todoDescription}>{todo.description}</Text>
                  <Text style={styles.todoDate}>{todo.selectedDate}</Text>
                </TouchableOpacity>
                <View style={styles.todoButtonsContainer}>
                  <TouchableOpacity style={styles.editButton} onPress={() => handleEditTodo(todo)}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTodo(todo.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={todoTitle}
              onChangeText={(text) => setTodoTitle(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={todoDescription}
              onChangeText={(text) => setTodoDescription(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={todoDate}
              onChangeText={(text) => setTodoDate(text)}
            />
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTodo}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
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
  todoDescription: {
    fontSize: 14,
    color: 'white',
  },
  todoDate: {
    fontSize: 12,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  updateButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default TodoListScreen;
