import React from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';

const Header = props =>{

    return (
        <View style={styles.headercont}>

             <Animatable.Image animation='bounceInDown'   source={props.mp} style={styles.logo}/>
       
    </View>
    );

};

const styles=StyleSheet.create({
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
        }

});

export default Header;

