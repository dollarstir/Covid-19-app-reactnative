import React from 'react';
import {StyleSheet, View, Text,Button,Image } from 'react-native';
import Colors from './constants/Colors';
// import Header from '../componets/Header';
// import Footer from '../componets/Footer';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation/';

function SplashScreen ({navigation}) {

  const yourPicture = require ('./assets/logo.png');
    return (
      <View style={styles.containersp}>
          <View style={styles.headercont}>
  
              <Animatable.Image animation='bounceInDown'   source={yourPicture} style={styles.logo}/>
  
          </View>
         
          
        
        
              <Animatable.View animation="fadeInUpBig"  style={styles.footercont}>
                          <TouchableOpacity activeOpacity={0.5}>
                              <LinearGradient
                                      colors={['rgb( 7, 205, 151 ) ', 'rgb( 54, 88, 38 )', 'rgb(  88, 156, 131  )']}
                                      style={{ padding: 15, alignItems: 'center', borderRadius: 5, flexDirection:'row' ,justifyContent:'space-between'}}>
                                      <Text
                                          style={{
                                          backgroundColor: 'transparent',
                                          fontSize: 15,
                                          
                                          color: '#fff',
                                          }}>
                                          Get Started
                                      </Text>
  
                                      <MaterialIcons name="navigate-next" size={20} color='#f1f1f1' />
                              </LinearGradient>
                          </TouchableOpacity>
                  </Animatable.View>
        
      
          
        
  
      </View>
    );
  
      
  };

  function SignInScreen(){
      return (
         <View>
           <Text>Welcome  Home</Text>
         </View>
      );
  };

export default function App() {
 
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Details" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  containersp: {
    flex: 1,
    backgroundColor: Colors.mygreen,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    
  },

  headercont:{
      flex:2,
      padding:10,

     alignItems: 'center',
     justifyContent:'center',
     backgroundColor: Colors.mygreen,
     width: '100%',
     flexDirection: 'column',
  

      },

      logo:{
          width:200,
          maxWidth: '80%',
          height: 200,
          borderRadius:50,
      },

      footercont:{
          flex:1,
         alignItems: 'center',
         justifyContent:'center',
         backgroundColor: Colors.mywhite,
         width: '100%',
      
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
  
         
         
  
  
          
      },

  
});
