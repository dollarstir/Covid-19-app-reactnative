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

const Tab = createBottomTabNavigator();




export default function Profile ({route,navigation}){
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
  const  [passVisibility,setPassVisibility] = useState(true);
  const [passIcon,setPassIcon] = useState('eye-slash');

  const [uname,setUname] = useState();
  const [upassword,setUpassword] = useState();
  const [umail,setUmail] = useState();
  const [ucontact,setUcontact] = useState();


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

    if(uname !=null && ucontact !=null){

    }
    else{

      fetch('https://eshba.dollarstir.com/api/login.php',{
      method:'post',
      header:{
        'Accept':'application/json',
        'Content-type':'application/json', 
      },
      body:JSON.stringify({
         email: umail,
         password: upassword, 
      })

    })
    .then((response)=>response.json())
        .then((responseJson)=>{
            if (responseJson =='ok') {

              
      
               
              
            }
            else{


              
              
             
             
           


              setUname(Object.keys(responseJson).map((key) =>(responseJson[key].name )));
             
              setUcontact(Object.keys(responseJson).map((key) =>(responseJson[key].contact )));
              // console.log(Object.keys(responseJson).map((key) =>(responseJson[key].name )))
    
      
            
           
              
              
             


              // useEffect(()=>{
              //   setTimeout(()=>{
              //     setRp();
                 
              //     navigation.navigate('Dashboard',{uname: username,umail:useremail,ucontact:usercontact});
              //   },5000)

              // },[])
              




            }
         
        })
        .catch((error)=>{
        
          alert('Failed to laod data');
          
        });

    }
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

      setTimeout(() => {

        setIsLoading(false);
        
      }, 4000);

     
    
      
    
    

    
    
   
    
  
    

  },[]);

  setTimeout(() => {
   navigation.popUp
   getdetails();

    
  }, 8000);

  


    

 

        return(
      
       
          <View style={styles.container}>
       
  
        <View style={styles.header}>
  
          <Animatable.Image animation='bounceIn' source={yourPicture} style={styles.logo} />
  
        </View>
  
        <Animatable.View animation='slideInUp' style={styles.footer}>
            <View style={styles.wrapper}>
            <View style={styles.inptcont}>
              <FontawsomeIcons name="user" size={24} style={styles.icons}/>
             <Text style={styles.mytxt}>{uname}</Text>
          </View>
  
          <View style={styles.inptcont}>
              <FontawsomeIcons name="envelope" size={24} style={styles.icons}/>
             <Text style={styles.mytxt}>{umail}</Text>
          </View>
  
          <View style={styles.inptcont}>
              <FontawsomeIcons name="phone" size={24} style={styles.icons}/>
             <Text style={styles.mytxt}>{ucontact}</Text>
          </View>
  
          
  
          
  
                            <TouchableOpacity activeOpacity={0.5} style={{marginTop:10}} onPress={signout}>
                              <LinearGradient
                                      colors={[Colors.mygreen, Colors.mygreen, Colors.mygreen]}
                                      style={{ padding: 15, alignItems: 'center', borderRadius: 15, justifyContent:'space-evenly', flexDirection:'row' ,width:'30%'}}>
                                      <Text
                                          style={{
                                          backgroundColor: 'transparent',
                                          fontSize: 17,
                                          
                                          color: '#fff',
                                          // marginLeft:20
                                          }}>
                                          Logout
                                      </Text>
  
                                      <MaterialIcons name="power" size={20} color='#f1f1f1' />
                              </LinearGradient>
                          </TouchableOpacity>
  
                         
  
  
                          
            </View>
  
        </Animatable.View>
     
    </View>
      );
      

    
    
    

} ;

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
      flex:3,
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
  
        marginTop: '-30%',
        alignItems:'center',
  
    },
  
    logo:{
      width:120,
      maxWidth: '80%',
      height: 120,
      borderRadius:60,
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
    }

    
        
  
    
  });
  