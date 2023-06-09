import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [loopedMessages, setLoopedMessages] = useState([
    "Remember to take time for yourself today",
    "It's Ok not to be Ok, but it's important to seek help",
    "Never underestimate the power of sleep",
    "Regular Exercise helps promote good mental health",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [slideshowImages, setSlideshowImages] = useState([
    require('../assets/stressed1.png'),
    require('../assets/stressed2.jpg'),
    require('../assets/stressed3.jpg'),
    require('../assets/stressed4.jpg'),
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === loopedMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(imageInterval);
    };
  }, [loopedMessages, slideshowImages]);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Hello There !</Text>
      </View>
      <ImageBackground source={require('../assets/background1.jpg')} style={styles.imageBackground}>
        <View style={styles.loopedMessagesContainer}>
          <Text style={styles.loopedMessage}>
            {loopedMessages[currentMessageIndex]}
          </Text>
        </View>
        <View style={styles.slideshowContainer}>
          <Image
            source={slideshowImages[currentImageIndex]}
            style={styles.slideshowImage}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Library')}>
            {/* Library Button */}
            <Image source={require('../assets/book2.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            {/* Goal Planning Button */}
            <Image source={require('../assets/goal.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Goal Planning</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  welcomeContainer: {
    backgroundColor: '#007AFF',
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  loopedMessagesContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loopedMessage: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  slideshowContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  slideshowImage: {
    width: '100%',
    height: '120%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
