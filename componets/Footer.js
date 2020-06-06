import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigator} from 'react-navigation';

const Footer = props =>{

    return (
        <Animatable.View animation="fadeInUpBig"  style={styles.footercont}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {props.navigation.navigate("login");   }}>
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
    );

};

const styles=StyleSheet.create({
    

});




export default Footer;

