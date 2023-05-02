// Alhassan Ashraf Shawwa 120190095

import React,{useState} from 'react';

import {View,Text,StyleSheet,FlatList,Alert} from 'react-native';
import uuid from "react-native-uuid";
import Header from './src/screens/Header';
import AddItem from './src/screens/AddItem';
import ListItems from './src/screens/ListItems'
const App=()=> {
  const [items,setItems] =  useState([
{id: uuid(), text: 'milk'},
{id: uuid(), text: 'eggs'},
{id: uuid(), text: 'bread'},
{id: uuid(), text: 'juice'},
  ]);
  const deleteItem = (id)=>{
setItems(prevItems =>{
  return prevItems.filter(item => item.id !=id)
});
  };
  const addItem =text => {
    if(!text){
Alert.alert('Error','Please Enter An item',{text:'ok'})
    }else{ setItems(prevItems =>{
      return [{id: uuid(),text}, ...prevItems]
  });}
   
};

  return (
  <View style={styles.container}>
<Header title='Shopping List'/>
<AddItem addItem={addItem}/>
<FlatList data={items}
 renderItems={({item}) =>( 
 <ListItems item={item} deleteItem={deleteItem}/>
 )}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
