import React, {useState,useEffect} from 'react';
import {StyleSheet, View, Text,Button,Image,TextInput,Keyboard,TouchableOpacity,ScrollView} from 'react-native';
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




export default function Guide ({route,navigation}){
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

  // const getdetails = ()=>{

  //   if(uname !=null && ucontact !=null){

  //   }
  //   else{

  //     fetch('https://eshba.dollarstir.com/api/login.php',{
  //     method:'post',
  //     header:{
  //       'Accept':'application/json',
  //       'Content-type':'application/json', 
  //     },
  //     body:JSON.stringify({
  //        email: umail,
  //        password: upassword, 
  //     })

  //   })
  //   .then((response)=>response.json())
  //       .then((responseJson)=>{
  //           


              
              
             
             
           


  //             setUname(Object.keys(responseJson).map((key) =>(responseJson[key].name )));
             
  //             setUcontact(Object.keys(responseJson).map((key) =>(responseJson[key].contact )));
  //             console.log(Object.keys(responseJson).map((key) =>(responseJson[key].name )))
    
      
            
           
              
              
             


  //             // useEffect(()=>{
  //             //   setTimeout(()=>{
  //             //     setRp();
                 
  //             //     navigation.navigate('Dashboard',{uname: username,umail:useremail,ucontact:usercontact});
  //             //   },5000)

  //             // },[])
              




  //           }
         
  //       })
  //       .catch((error)=>{
        
  //         alert('Failed to laod data');
          
  //       });

  //   }
  // };

  


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
  //  getdetails();

    
  }, 8000);

  


    

 

        return(
      
       
          <View style={styles.container}>
       
  
        <View style={styles.header}>
  
          <Animatable.Image animation='bounceIn' source={yourPicture} style={styles.logo} />
  
        </View>
  
        <Animatable.View animation='slideInUp' style={styles.footer}>
        <ScrollView>
        
                <View style={styles.wrapper}>
                  

                  
                

                <View style={styles.card}> 
                  <View style={{borderRightWidth:1,width:80,height:147,marginTop:-9}}>
                  <Image source={wash}  style={{width:70,height:70,marginTop:30}}/>
                  </View>

                  <Text style={{marginTop:-130,marginLeft:100}}>
                      Wash your hands frequently {'\n'}
                          Regularly and thoroughly clean your hands{'\n'} 
                          with an alcohol-based hand rub or wash {'\n'}
                          them with soap and water.
                    </Text>
                    
                  
                </View>


                <View style={styles.card}> 
                  <View style={{borderRightWidth:1,width:80,height:147,marginTop:-9}}>
                   <Image source={distance}  style={{width:70,height:70,marginTop:30}}/>
                  </View>

                  <Text style={{marginTop:-130,marginLeft:100}}>
                          Maintain social distancing {'\n'}
                          Maintain at least 1 metre (3 feet) {'\n'} 
                          distance between yourself and  {'\n'}
                          anyone who is coughing or sneezing.
                    </Text>
                    
                  
                </View>



                <View style={styles.card}> 
                  <View style={{borderRightWidth:1,width:80,height:147,marginTop:-9}}>
                   <Image source={eye}  style={{width:70,height:70,marginTop:30}}/>
                  </View>

                  <Text style={{marginTop:-130,marginLeft:100}}>
                   Avoid touching eyes, nose and mouth {'\n'}
                   Hands touch many surfaces and can pick up viruses.  {'\n'} 
                   Once contaminated, hands can transfer the virus to your eyes, nose or mouth.  {'\n'}
                        
                    </Text>
                    
                  
                </View>



                <View style={styles.card}> 
                  <View style={{borderRightWidth:1,width:80,height:147,marginTop:-9}}>
                   <Image source={resp}  style={{width:70,height:70,marginTop:30}}/>
                  </View>

                  <Text style={{marginTop:-130,marginLeft:100}}>
                   Practice respiratory hygiene {'\n'}
                   Make sure you, and the people around you,follow good respiratory hygiene {'\n'} 
                   This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. {'\n'}
                        
                    </Text>
                    
                  
                </View>
        
        
                   
                
        
                
        
                
        
                                
          </View>
     </ScrollView>
                              
      
  
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
      height:150,
      width:349,
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
  