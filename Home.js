import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) =>(
    <View>
        <TouchableOpacity
            onPress={()=>{navigation.navigate('Article')}}
        >
            <Text>Click Here</Text>
        </TouchableOpacity>
    </View>
)

Home.navigationOptions = () => {(
    title:'Home'
)}



export default Home
