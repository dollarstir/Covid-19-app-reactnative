import React, {useState} from 'react';
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
// import ImagePicker from 'react-native-image-picker';
// import {ImagePicker} from 'expo';


export default  function Register({navigation}){
    const yourPicture = require ('../assets/logo.png');
    const  [passVisibility,setPassVisibility] = useState(true);
    const [passIcon,setPassIcon] = useState('eye-slash');


    // login deatils
    const [myemail,setMyemail]= useState('');
    const [myname,setMyname] =useState('');
    const [contact,setContact] = useState('');
    const [password,setPassword]= useState('');

    


    const adduser = ()=>{

      fetch('https://eshba.dollarstir.com/api/index.php',{
        method:'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json',


        },
        body:JSON.stringify({
          name:myname,
          email : myemail,
          contact:contact,
          password:password

        })
          
        
      })
      .then((response)=>response.json())
          .then((responseJson)=>{
              alert(responseJson);
              Keyboard.dismiss();

          })
          .catch((error)=>{
            console.error(error);

          });
          

    }


    const Passwordswitch = ()=>{

      if (passVisibility == true) {
        setPassVisibility(false);
        setPassIcon('eye');

        
      } else if(passVisibility==false) {
        setPassVisibility(true);
        setPassIcon('eye-slash');
        
      }
  

       
      
      
    }
    return (
        <View style={styles.container}>
     

      <View style={styles.header}>

        <Animatable.Image animation='bounceIn' source={yourPicture} style={styles.logo} />

      </View>

      <Animatable.View animation='slideInUp' style={styles.footer}>
          <View style={styles.wrapper}>
          <View style={styles.inptcont}>
           <View style={styles.ico}> 
             <FontawsomeIcons name="user" size={24}/>
           </View>
            <TextInput placeholder='Full Name' onChangeText={myname=>setMyname(myname)} defaultValue={myname} style={styles.txtipt}></TextInput>
        </View>

        <View style={styles.inptcont}>
          <View style={styles.ico}> 
            <FontawsomeIcons name="envelope" size={24}/>
          </View>

            <TextInput  placeholder='Email Address' style={styles.txtipt}  onChangeText={myemail=>setMyemail(myemail)} defaultValue={myemail}></TextInput>
            {/* <FontawsomeIcons name="eye-slash" size={20}/> */}
        </View>

        <View style={styles.inptcont}>
          <View style={styles.ico}> 
            <FontawsomeIcons name="phone" size={24}/>

           </View>
            <TextInput  placeholder='Phone Number' style={styles.txtipt} onChangeText={contact=>setContact(contact)} defaultValue={contact}></TextInput>
            {/* <FontawsomeIcons name="eye-slash" size={20}/> */}
        </View>

        <View style={styles.inptcont}>
          <View style={styles.ico2}> 
            <FontawsomeIcons name="lock" size={24}/>

          </View>
            <TextInput secureTextEntry={passVisibility} placeholder='Password' style={styles.txtipt} onChangeText={password=>setPassword(password)} defaultValue={password}></TextInput>
            <FontawsomeIcons onPress={Passwordswitch} name={passIcon} size={23}/>
        </View>

        

        

                          <TouchableOpacity activeOpacity={0.5} style={{marginTop:10}} onPress={adduser}>
                            <LinearGradient
                                    colors={[Colors.mygreen, Colors.mygreen, Colors.mygreen]}
                                    style={{ padding: 15, alignItems: 'center', borderRadius: 15, justifyContent:'space-evenly', flexDirection:'row' ,width:'80%'}}>
                                    <Text
                                        style={{
                                        backgroundColor: 'transparent',
                                        fontSize: 17,
                                        
                                        color: '#fff',
                                        // marginLeft:20
                                        }}>
                                        Register
                                    </Text>

                                    <MaterialIcons name="forward" size={20} color='#f1f1f1' />
                            </LinearGradient>
                        </TouchableOpacity>


                        <TouchableOpacity activeOpacity={0.5} style={{marginTop:20}} onPress={()=> navigation.navigate('SignIn')}>
                            <LinearGradient
                                    colors={[Colors.mywhite, Colors.mywhite, Colors.mywhite]}
                                    style={{ padding: 15, alignItems: 'center', borderRadius: 15,borderWidth:1,borderColor: Colors.mygreen, justifyContent:'space-evenly', flexDirection:'row' ,width:'80%'}}>
                                    <Text
                                        style={{
                                        backgroundColor: 'transparent',
                                        fontSize: 17,
                                        
                                        color: Colors.mygreen,
                                        // marginLeft:20
                                        }}>
                                        Login
                                    </Text>

                                    <FontawsomeIcons name="unlock" size={20} color={Colors.mygreen} />
                            </LinearGradient>
                        </TouchableOpacity>
          </View>

      </Animatable.View>
   
  </View>
    );

};

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
      marginVertical: 20
     
      
  
    },
  
    
    txtipt:{
      width:'80%',
      height:30,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingLeft: 20,
    },
  
    wrapper :{
  
        marginTop: 0,
        alignItems:'center',
  
    },
  
    logo:{
      width:100,
      maxWidth: '80%',
      height: 100,
      borderRadius:50,
  
    },

    ico:{
      borderColor:Colors.mygreen,
      borderRadius:30,
      borderWidth:1,
      width:35,
      height:35,
      alignItems:'center',
      justifyContent:'center'
    },
    ico2:{
      borderColor:Colors.mygreen,
      borderRadius:30,
      borderWidth:1,
      width:35,
      height:35,
      alignItems:'center',
      justifyContent:'center',
      marginLeft: 10,
    }
    
        
  
    
  });
  