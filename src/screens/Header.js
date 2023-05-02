// Alhassan Ashraf Shawwa 120190095
import React from 'react';
import {View, Text,Image,StyleSheet,} from 'react-native';



const Header=({title})=>{
 return (
 
 <View style={styles.contianer}>
 <Text style={styles.text}>{title}</Text>
   </View>
    )
}

const styles = StyleSheet.create({
contianer:{
padding:15,
hieght:60,
backgroundColor:'navy'

 },
 text:{
textAlign:'center',
fontSize:22,
color:'white'
 }

});

export default Header;