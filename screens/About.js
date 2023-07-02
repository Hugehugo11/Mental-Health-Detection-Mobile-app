import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const About = () => {
  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <ScrollView>
          <View style={styles.grayContainer}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.description}>
              The Mental Health Detection App is designed to provide support and assistance to individuals facing mental health challenges. Leveraging the power of Machine Learning, the app aims to detect potential mental health issues focusing on depression and provide valuable insights for users.
            </Text>
            <Text style={styles.description}>
              The app focuses on helping people by analyzing their responses to a series of questions and utilizing a trained Machine Learning model to identify possible signs of mental health conditions. It aims to raise awareness, encourage early intervention, and promote overall well-being.
            </Text>
            <Text style={styles.description}>
              Our team of dedicated developers and mental health professionals have collaborated to create an intuitive and user-friendly app that prioritizes privacy, confidentiality, and accuracy. By leveraging cutting-edge technologies, we aim to empower individuals to take control of their mental well-being and seek appropriate support when needed.
            </Text>
          </View>
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 40,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default About;
