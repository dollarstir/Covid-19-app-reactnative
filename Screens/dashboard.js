import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text,Button,Image,TextInput,Keyboard,TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
// import Header from '../componets/Header';
// import Footer from '../componets/Footer';
import {LinearGradient} from 'expo-linear-gradient';
import FontawsomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import SignIn from './SignInScreen';
// import AsyncStorage from '@react-native-community/async-storage';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

import Profile from './profile';
import Guide from './guide';





const Tab = createBottomTabNavigator();






 function Dashboard ({route,navigation}){
  const [isLoadin,setIsLoading] = useState(true);
  const [islog,setIsLog] = useState(true);
  const [gg,setGG] = useState();
  const [mm,setMM] = useState();


  

  

  

  // const {uname} =route.params;
  // const {umail} =route.params;
  // const {ucontact} =route.params;
  // let un= [uname];
  // let um =[umail];
  // let uc =[ucontact];
  const yourPicture = require ('../assets/avatar.png');
  const wash = require ('../assets/wash.png');
  const eye = require ('../assets/eye.png');
  const distance = require ('../assets/distance.png');
  const resp = require ('../assets/resp.png');
  const  [passVisibility,setPassVisibility] = useState(true);
  const [passIcon,setPassIcon] = useState('eye-slash');

  const [uname,setUname] = useState();
  const [upassword,setUpassword] = useState();
  const [umail,setUmail] = useState();
  const [ucontact,setUcontact] = useState();
  const [confirmed,setConfirmed] = useState(0);
  const [recovered,Setrecovered] = useState(0);
  const [death,setDeath] = useState(0);


  async function signout(){
    try{

  
      const r1 =  await AsyncStorage.removeItem('useremail');
      const r2 =  await AsyncStorage.removeItem('password');
      
      setUcontact();
      setUmail();
      setUname();
      setTimeout(() => {
        navigation.navigate('SignIn');
      }, 1000);

        

   
      
     
      


    }catch(e){
       console.log(e);
    }
   
  };

  const getdetails = ()=>{

   
     

      fetch('https://eshba.dollarstir.com/api/get.php',{
      method:'get',
      header:{
        'Accept':'application/json',
        'Content-type':'application/json', 
      } 
      
    })
    .then((response)=>response.json())
        .then((responseJson)=>{

          setConfirmed(Object.keys(responseJson).map((key) =>(responseJson[key].confirmed )));
          Setrecovered(Object.keys(responseJson).map((key) =>(responseJson[key].recovered )));
          setDeath(Object.keys(responseJson).map((key) =>(responseJson[key].death )));

// console.log(responseJson);

        }
      ).catch((e)=>{

       

      })
       
  
  };

  


  async function checking(){
    try {
      const vpass = await AsyncStorage.getItem('password')
      const vald = await AsyncStorage.getItem('useremail');
      if (vald !=null){

        setIsLog(true);
        setUmail(vald);
        setUpassword(vpass);
        
        

       
      }
      else{
        setIsLog(false);

      
      
       
  
  
       
         
        
        
      }
    }catch{
      alert('somethign wrong');
    }
  };

  useEffect(()=>{

  
   

   

    

      checking();
       getdetails();
   

      setTimeout(() => {

        setIsLoading(false);
        
      }, 4000);

     
    
      
    
    

    
    
   
    
  
    

  },[]);

  setTimeout(() => {
   navigation.popUp
  

    
  }, 8000);
  setInterval(()=>{
    getdetails();
  },60 *10000);

  


    

 

        return(
      
       
          <View style={styles.container}>
       
  
        <View style={styles.header}>
  
          <Animatable.Image animation='bounceIn' source={yourPicture} style={styles.logo} />
  
        </View>
  
        <Animatable.View animation='slideInUp' style={styles.footer}>
        <View style={styles.wrapper}>

            
<View style={styles.card}> 
  <Text style={styles.cardtext}>Confirmed </Text>
  <Text style={styles.cardnumber}>{confirmed}</Text>
  <View style={{marginLeft:210,marginTop:-55,borderColor:Colors.mygreen,borderWidth:1,alignItems:'center',borderRadius:40,width:60}}>
    <MaterialIcons name='check' size={40} color={Colors.mygreen}/>
  </View>

</View>

<View style={styles.card}> 
  <Text style={styles.cardtext}>Recovered </Text>
  <Text style={styles.cardnumber}>{recovered}</Text>
  <View style={{marginLeft:210,marginTop:-55,borderColor:Colors.mygreen,borderWidth:1,alignItems:'center',borderRadius:40,width:60}}>
    <FontawsomeIcons name='heart' size={40} color={Colors.blue}/>
  </View>

</View>

<View style={styles.card}> 
  <Text style={styles.cardtext}>Death </Text>
  <Text style={styles.cardnumber}>{death}</Text>
  <View style={{marginLeft:210,marginTop:-55,borderColor:Colors.mygreen,borderWidth:1,alignItems:'center',borderRadius:40,width:60}}>
    <FontawsomeIcons name='close' size={40} color={Colors.myred}/>
  </View>

</View>





               

             


              
</View>
        
                                
                
  
        </Animatable.View>
     
    </View>
      );
      

    
    
    

} ;


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.mygreen,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Guide"
        component={Guide}
        options={{
          tabBarLabel: 'Guide',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />


<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headercont:null,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function DashboardTab() {
  return (
    <MyTabs />
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:Colors.mygreen
  
    },
    header:{
      flex:1,
      backgroundColor:Colors.mygreen,
      alignItems:'center',
      padding:10,
      justifyContent: 'center',
  
  
    },
    footer:{
      flex:4,
      backgroundColor: 'white',
      borderTopLeftRadius: 60,
      borderTopRightRadius:60,
      backgroundColor:Colors.mywhite,
      padding: 5,
      alignItems:'center',
      justifyContent:'space-evenly',
      flexDirection: 'column',
  
    },
    inptcont:{
      
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-around',
      marginVertical: 20,
      backgroundColor:Colors.mygreen,
      width:'100%',
      height:40,
      borderRadius:5,
      
     
      
  
    },
  
    
    txtipt:{
      width:'80%',
      height:30,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingLeft: 20,
    },
  
    wrapper :{
  
        marginTop: '10%',
        alignItems:'center',
        justifyContent:'center'
  
    },
  
    logo:{
      width:100,
      maxWidth: '80%',
      height: 100,
      borderRadius:50,
      marginTop:10,
  
    },

    icons:{
        marginLeft: -10,
        color:Colors.mywhite,
    },
    
    mytxt:{
       
        height:30,
        color:Colors.mywhite,
        fontSize:20,
    },
    

    card:{
      marginVertical:15,
      borderRadius:25,
      borderColor:Colors.mygreen,
      height:100,
      width:300,
      borderWidth:1,
      padding:10,



    },

    cardtext:{

      fontSize:25,
      marginLeft:20,
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 1 },
      // shadowOpacity: 0.5,
      // shadowRadius: 4,  
      // elevation: 5

    },

    cardnumber:{
      fontSize:28,
      marginLeft:20,
      marginTop:10

    }

    
        
  
    
  });
  