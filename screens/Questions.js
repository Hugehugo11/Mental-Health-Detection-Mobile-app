import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import axios from 'axios';

const QuestionsScreen = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    { key: 'question1', text: 'What is the Client\'s Gender' },
    { key: 'question2', text: 'Enter the age of the Client' },
    { key: 'question3', text: 'Is the Client married?' },
    { key: 'question4', text: 'How many years did the Client spend on education?' },
    { key: 'question5', text: 'How many members are in the Client\'s house' },
    { key: 'question6', text: 'How much value for durable assets in USD' },
    { key: 'question7', text: 'How much is the value of the Client\'s phone in USD' },
    { key: 'question8', text: 'How much do you spend on alcohol? (USD)' },
    { key: 'question9', text: 'Non-agricultural business as primary income' },
    { key: 'question10', text: 'How many employees do you have?' },
    { key: 'question11', text: 'Non-agricultural business flow in USD' },
    { key: 'question12', text: 'Total expenses monthly?' },
    { key: 'question13', text: 'What is the number of whole days without food last month for an adult?' },
    { key: 'question14', text: 'How many meals skipped by children?' },
    { key: 'question15', text: 'How many days do children go without eating?' },
    { key: 'question16', text: 'Is there enough food in the house for tomorrow?' },
    { key: 'question17', text: 'What is the proportion of household sick/injured in a month?' },
    { key: 'question18', text: 'What is the proportion of illnesses where a doctor was consulted in a month?' },
    { key: 'question19', text: 'What are the expenses of a kid?' },
    { key: 'question20', text: 'What is the cost of non-durable investment?' },
    { key: 'question21', text: 'Have you ever given M-Pesa?' },
    { key: 'question22', text: 'What is the amount saved in M-Pesa?' },
    // Add more questions here
  ];

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform API call or any other action to submit the answers
    // ...

    console.log('Submitted answers:', answers);
  };

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.grayContainer}>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.title}>Questions for Prediction</Text>
  
            {questions.map((question) => (
              <View key={question.key} style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.text}</Text>
                <TextInput
                  style={styles.answerInput}
                  placeholder="Enter your answer"
                  value={answers[question.key] || ''}
                  onChangeText={(value) => handleAnswerChange(question.key, value)}
                />
              </View>
            ))}
  
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
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
 /* grayContainer: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    //width: '90%',
  },
  */
  scrollContainer: {
    flex: 1,
    maxHeight: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  answerInput: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  submitButton: {
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

export default QuestionsScreen;
