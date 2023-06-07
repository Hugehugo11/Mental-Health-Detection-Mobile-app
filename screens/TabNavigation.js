//contains how to put custom images as icons of bottom tab navigation
import  React from 'react';
import { StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './Homescreen';
import Todolists from './Todolists';
import Library from './Library';
import Searchproff from './Searchproff';
import Message from './Message';

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
    name="Library"
     component={Library} 
     options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../assets/book.png')}/>
            );
        }
    }}
     />
  </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
  bottomTabStyle:{
    position: 'absolute',
    width:'90%',
    justifyContent:'center',
  },

})