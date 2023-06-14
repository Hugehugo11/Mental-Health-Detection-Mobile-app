import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Todolists from './Todolists';
import Library from './Library';
import Searchproff from './Searchproff';
import Message from './Message';
import Settings from './Settings';



const Tab = createBottomTabNavigator();

export default function TabNavigation()
{
    return(
    <Tab.Navigator
    screenOptions={{
    headerShown:false,
    tabBarStyle:{    
    position: 'absolute',
    left:'5%',
    flex:1,
    width:'90%',
    height:'8%',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:25,
    paddingBottom:'2%',
    paddingTop:'1%',
    marginBottom:'3%',
    backgroundColor:'rgba(255,255,255,1)',
  },
  }}>
   
   <Tab.Screen 
    name="Home" 
    component={Homeproff}
    options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/home.png')}/>
            );
        }
    }}
     />   
   
    <Tab.Screen 
    name="Search" 
    component={Searchproff}
    options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/search-.png')}/>
            );
        }
    }}
     />


    <Tab.Screen
     name="Todolist"
      component={Todolists}
      options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/todo-list.png')}/>
            );
        }
    }} />

    <Tab.Screen
     name="Message"
      component={Message}
      options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/messenger.png')}/>
            );
        }
    }}
       />
    <Tab.Screen 
    name="Settings"
     component={Settings} 
     options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/settings.png')}/>
            );
        }
    }}
     />
  </Tab.Navigator>
    )
};


const Homeproff = ({ navigation }) => {
  const [loopedMessages, setLoopedMessages] = useState([
    "Help others without any reason and give without the expectation of receiving anything in return.",
    "Service to others is the rent you pay for your room here on earth.",
    "Those who are happiest are those who do the most for others.",
    "There is no better exercise for your heart than reaching down and helping to lift someone up.",
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [slideshowImages, setSlideshowImages] = useState([
    require('../assets/homeproff4.jpg'),
    require('../assets/homeproff3.jpg'),
    require('../assets/homeproff1.jpg'),
    require('../assets/homeproff2.jpg'),
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
        <Text style={styles.welcomeMessage}>Hello There!  Welcome</Text>
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
    fontWeight: 'bold',
    //color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  slideshowContainer: {
    height: 250,
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
  bottomTabStyle:{
    position: 'absolute',
    width:'90%',
    justifyContent:'center',
  }
});

//export default Homeproff;
