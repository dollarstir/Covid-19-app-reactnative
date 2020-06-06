import 'react-native-gesture-handler';
import  React,{useState,useEffect} from 'react';
import {Text,View, StyleSheet,Button,TextInput,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { View } from 'react-native-animatable';
// import { NavigationContainer } from '@react-navigation/native';

import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './constants/Colors';
import { green } from 'color-name';
import mylogin from './Screens/SignInScreen';
import Register from './Screens/Register';
import  DashboardTab from './Screens/dashboard';
import AsyncStorage from '@react-native-community/async-storage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();






function HomeScreen({navigation}) {
const [mymain,setMyMain] = useState('Home');
const [isLoading,setIsLoading]= useState(true);
const [islog,setIsLog] = useState(false);


 

  const updatemain = ()=>{
    setMyMain('SignIn');
    navigation.navigate('SignIn')
    

  };
  const yourPicture = require ('./assets/logo.png');


  async function checking(){
    try {
      const vald = await AsyncStorage.getItem('useremail');
      if (vald !==null){

        setIsLog(true);

        navigation.navigate('DashboardTab');

       
      }
      else{
        setIsLog(false);
        setTimeout(()=>{
          setIsLoading(false);
        },4000)
        
      }
    }catch{
      alert('somethign wrong');
    }
  };

  useEffect(()=>{

    checking()
    
  },[]);
  if (isLoading==true) {
    return (
      <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator  size='large'/>
      </View>
    );
    
  }
  else{
    return (
      <View style={styles.container}>
          <View style={styles.headercont}>
  
              <Animatable.Image animation='bounceInDown'   source={yourPicture} style={styles.logo}/>
  
          </View>
         
          
        
        
              <Animatable.View animation="fadeInUpBig"  style={styles.footercont}>
                          <TouchableOpacity activeOpacity={0.5} onPress={updatemain}>
                              <LinearGradient
                                      colors={[Colors.mygreen, Colors.mygreen, Colors.mygreen]}
                                      style={{ padding: 15, alignItems: 'center', borderRadius: 25, flexDirection:'row' ,justifyContent:'space-between'}}>
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
  }

    
};



function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={mylogin}
        options={{
          headercont:null,
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



const Stack = createStackNavigator();

export default function App() {



  return (
  //   <NavigationContainer>
    
  //   <Stack.Navigator initialRouteName={HomeScreen.mymain}>
  //       <Stack.Screen name="Home"   component={HomeScreen}
  //        options={{ title: 'Welcome',headerStyle: {
  //         backgroundColor: Colors.mygreen,
  //         borderBottomColor: Colors.mygreen,
  //         borderBottomWidth: 0,
  //         height: 0,
          
          
  //     },headerTintColor:Colors.mygreen}
        
  //       }
  //        style={styles.appscreen}
  //       />
        
  //       <Stack.Screen name="SignIn" 
        
  //       component={mylogin} 

  //       options ={{title:' ',headerStyle:{
  //         height:0,
  //       },}}
        
        
  //       />

  //       <Stack.Screen name="Register" component={Register} options ={{title:' ',headerStyle:{
  //         height:0,
  //       },}} />


  //     <Stack.Screen name="Dashboard" component={Dashboard} options ={{title:' ',headerStyle:{
  //         height:0,
  //       },}} />
  //     </Stack.Navigator>
   
  // </NavigationContainer>


  // 
  


  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
        
        component={HomeScreen} 
        options ={{title:' ',headerStyle:{
               height:0,
             },}}
          />
        <Stack.Screen name="SignIn" component={mylogin}
         options ={{title:' ',headerStyle:{
          height:0,
        },}}
        />

<Stack.Screen name="Register" component={Register} options ={{title:' ',headerStyle:{
       height:0,
       },}} />


        <Stack.Screen name="DashboardTab" component={DashboardTab} 
        options ={{title:' ',headerStyle:{
          height:0,
          },}}
        />
      </Stack.Navigator>
  </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
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

      appscreen:{
       

      },
  
});