// Alhassan Ashraf Shawwa 120190095
import React from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ListItems=({item,deleteItem})=>{
 return (
 <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="Firebrick"
        onPress={() =>deleteItem(item.id)} />
    </View>
 </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listItemText:{
        fontSize:18,
    }

});

export default ListItems;