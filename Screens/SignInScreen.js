import React,{useState,useEffect} from 'react';
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

// import RNFetchBlob from 'react-native-fetch-blob';
import Axio from 'axios';


// import { NavigationContainer } from '@react-navigation/native';
 

export default function mylogin({navigation}) {

  
  const yourPicture = require ('../assets/logo.png');
  const loadinggif = require('../assets/loading.gif');
  const [rp,setRp] = useState();
  const [username,setUserName] = useState('');
  const [useremail,setUserEmail]=useState('');
  const [usercontact,setUserContact]= useState('');
  const [myemail,setMyemail]= useState('');
  const [isLog,setIsLog] = useState(false);

  const signout=async()=>{
    try{

  
      const r1 =  await AsyncStorage.removeItem('useremail');
      const r2 =  await AsyncStorage.removeItem('password',password);

   
      
      setIsLog(false);


    }catch(e){
       console.log(e);
    }
   
  };

  async function checking(){
    try {
      const vpass = await AsyncStorage.getItem('password')
      const vald = await AsyncStorage.getItem('useremail');
      if (vald !=null){

        setIsLog(true);

       
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

  
   

    
 
  
    

  },[]);

  const savedt=async()=>{
    try{

  
      const s1 =  await AsyncStorage.setItem('useremail',myemail);
      const s2 =  await AsyncStorage.setItem('password',password);
   
      
     


    }catch(e){
       console.log(e);
    }
   
  };

  
  const [password,setPassword]= useState('');

  const login=async ()=>{
    Keyboard.dismiss();



    setRp(
      
      <Animatable.View animation='lightSpeedIn' style={styles.loading}><Text style={{color:Colors.mygreen,fontSize:20}}>Loading....</Text><Image source={loadinggif} /></Animatable.View>
    ),
    fetch('https://eshba.dollarstir.com/api/login.php',{
      method:'post',
      header:{
        'Accept':'application/json',
        'Content-type':'application/json', 
      },
      body:JSON.stringify({
         email: myemail,
         password: password, 
      })

    })
    .then((response)=>response.json())
        .then((responseJson)=>{
            if (responseJson =='ok') {

             
      
                setRp(
                  <Animatable.View animation='lightSpeedIn' style={styles.sucess}><Text style={{color:Colors.mywhite}}>Login Successful</Text><Image source={loadinggif} /></Animatable.View>
                ),
                  setTimeout(()=>{
                    setRp();
                    navigation.navigate('Dashboard');
                  },5000)
              
            }
            else if(responseJson =='enter email'){
              setRp(
                <Animatable.View animation='lightSpeedIn' style={styles.error}><Text style={{color:Colors.mywhite,fontSize:20}}>{responseJson}</Text></Animatable.View>)
            }
            else if(responseJson =='Please enter correct password'){
              setRp(
                <Animatable.View animation='lightSpeedIn' style={styles.error}><Text style={{color:Colors.mywhite,fontSize:20}}>Please enter correct password</Text></Animatable.View>)
            }
            else if(responseJson=='something wrong'){
              setRp(
                <Animatable.View animation='lightSpeedIn' style={styles.error}><Text style={{color:Colors.mywhite,fontSize:20}}>Wrong  login details</Text></Animatable.View>)
            }
            else{


              
              
             
              setRp(
                <Animatable.View animation='lightSpeedIn' style={styles.sucess}><Text style={{color:Colors.mywhite}}> login Successful</Text><Image source={loadinggif} /></Animatable.View>

                  
              )
              setUserName(Object.keys(responseJson).map((key) =>(responseJson[key].name )));
              setUserEmail(Object.keys(responseJson).map((key) =>(responseJson[key].email )));
              setUserContact(Object.keys(responseJson).map((key) =>(responseJson[key].contact )));

              
              
              
              setTimeout(()=>{
                setRp();
                savedt();
                
    
               
                navigation.navigate('DashboardTab',{uname: username,umail:useremail,ucontact:usercontact});
              },5000)


              // useEffect(()=>{
              //   setTimeout(()=>{
              //     setRp();
                 
              //     navigation.navigate('Dashboard',{uname: username,umail:useremail,ucontact:usercontact});
              //   },5000)

              // },[])
              




            }
         
        })
        .catch((error)=>{
          // console.error(error);

          setRp(
            <Animatable.View animation='lightSpeedIn' style={styles.error}><Text style={{color:Colors.mywhite,fontSize:20}}>check internet connection</Text></Animatable.View>)
        });

   

  };
  

  
if(isLog ==true){

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>You are loged in</Text>
    
    <TouchableOpacity activeOpacity={0.5} style={{marginTop:10}} onPress={signout} navigation={navigation}>
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
                                            Signout
                                        </Text>

                                        <MaterialIcons name="forward" size={20} color='#f1f1f1' />
                                </LinearGradient>
                            </TouchableOpacity>
    </View>
  );
}

else{
  return (

    <View style={styles.container}>
     

      <View style={styles.header}>

        <Animatable.Image animation='bounceIn' source={yourPicture} style={styles.logo} />

      </View>

      <Animatable.View animation='slideInUp' style={styles.footer}>
          <View style={styles.wrapper}>
              <View style={styles.inptcont}>
                <View style={styles.ico}>
                <FontawsomeIcons name="envelope" size={24}/>

                </View>
                <TextInput placeholder='Email Address' onChangeText={myemail=>setMyemail(myemail)} defaultValue={myemail}  style={styles.txtipt}></TextInput>
            
                
              </View>

            <View style={styles.inptcont}>
             <View style={styles.ico2}>
                <FontawsomeIcons name="lock" size={24}/>

                </View>
                <TextInput secureTextEntry={true} placeholder='Password' style={styles.txtipt} onChangeText={password=>setPassword(password)} defaultValue={password}></TextInput>
                <FontawsomeIcons name="eye-slash" size={20}/>
            </View>

                              <TouchableOpacity activeOpacity={0.5} style={{marginTop:10}} uname={username} onPress={login} navigation={navigation}>
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
                                            Login
                                        </Text>

                                        <MaterialIcons name="forward" size={20} color='#f1f1f1' />
                                </LinearGradient>
                            </TouchableOpacity>


                            <TouchableOpacity activeOpacity={0.5} style={{marginTop:20}} onPress={() =>navigation.navigate('Register')}>
                                <LinearGradient
                                        colors={[Colors.mywhite, Colors.mywhite, Colors.mywhite]}
                                        style={{ padding: 15, alignItems: 'center', borderColor: Colors.mygreen,borderWidth:1, borderRadius: 15, justifyContent:'space-evenly', flexDirection:'row' ,width:'80%'}}>
                                        <Text
                                            style={{
                                            backgroundColor: 'transparent',
                                            fontSize: 17,
                                            
                                            color: Colors.mygreen,
                                            // marginLeft:20
                                            }}>
                                            Create Account
                                        </Text>

                                        <FontawsomeIcons name="user" size={20} color={Colors.mygreen} />
                                </LinearGradient>
                            </TouchableOpacity>
                            
          </View>
            <View style={{marginTop:30}}>
            {rp}
            </View>
      </Animatable.View>
   
  </View>
    
  );
}

 
  
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
    flex:2,
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

      marginTop: 20,
      alignItems:'center',

  },

  logo:{
    width:150,
    maxWidth: '80%',
    height: 150,
    borderRadius:50,

  },
  sucess:{
    width:320,
    height:60,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:Colors.mygreen,
    flexDirection:'row',
  },

  error:{
    width:320,
    flexDirection:'row',
    height:60,
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'red',

  },

  loading:{
    width:320,
    flexDirection:'row',
    height:60,
    justifyContent:'space-evenly',
    alignItems:'center',
    // backgroundColor:'red',

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


