 import React, {useEffect, useState} from 'react';
import {
  View, Text, TextInput, StyleSheet,TouchableHighlight, Alert, TouchableOpacity, Image, ScrollView 
} from 'react-native';
import { 
  Container, Header, Item, Input, Card, CardItem, Thumbnail,  Button, Left, Body, Right
 } from 'native-base';
 import Modal from "react-native-modal";

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";    
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProducts , deleteProduct } from '../Redux/Actions/Products'
import { useSelector , useDispatch } from "react-redux";
import AddProduct from './AddProduct';

const Product=(props)=> {
  const productList = useSelector(state=>state.product.productList)
  const dispatch = useDispatch();
  const [modalAdd,setModalAdd] = useState(false);

  function deleteAProduct(id) {
    dispatch(deleteProduct(id))
    .then(response => {
        console.log(id);
    })
  }

  const deleteAlert = (item) => {
    Alert.alert(
      'Are You Sure Want To Delete?',
      item.name,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteAProduct(item.id)},
      ],
      {cancelable: false},
    );
  }

  useEffect (()=>{
    dispatch(getProducts())
  },[])

  return (
    <View>
      <Header searchBar rounded style={styles.header}>
        <View style={{flexDirection:'row'}}>
          <View>
            <Text style={styles.font}>Product</Text>
          </View>
          <View>
           <Icon name="plus-square-o" onPress={()=> props.navigation.navigate('AddProduct')} size={27} style={styles.plus}/>
          </View>
         </View>
      </Header> 
      <ScrollView style={{marginHorizontal : 8, marginBottom:60}}>
      {productList.map((item,index) => (
            <Card key={index}>
            <CardItem >
            <Image source={{uri:item.image}} style={{height: 75, width: 75 }}/>
              <View style={{flexDirection:'column', marginLeft:10}}>
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
                <Text>{item.price}</Text>
              </View>
              <Right style={{marginRight:-50}}>
                <Icon name="edit" size={27} onPress={()=> props.navigation.navigate('EditProduct',{row:item})} />
                <Icon name="trash-o" size={27} color={'red'} style={{marginRight:6, marginTop:4}} onPress={()=>deleteAlert(item)} />
              </Right>
             </CardItem>
           </Card>
           ))}
      </ScrollView>
      {/* Delete Alert */}
   
      {/* Modal Add */}
      {/* <Modal isVisible={modalAdd}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={setModalAdd(false)} />
          </View>
        </Modal> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalAdd}
        >
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalAdd(false);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Product;


const styles = StyleSheet.create({
  header : {
    backgroundColor : '#21A69A' 
  },
  search: {
    marginRight : 25
  },
  cart: {
    marginTop : 8,
    marginRight : 9
  },
  mart1: {
    borderRadius : 5,
    backgroundColor : '#a8e3e0',
    marginHorizontal: 10,
    marginTop : 8,
  },
  mart2 : {
    backgroundColor : '#5cede6',
    borderRadius : 5,
    height : 60
  },
  mart3 : {
    backgroundColor : '#a8e3e0',
    borderRadius : 5,
    height : 40,
    flexDirection: 'row',
    marginTop : 16
  },
  font : {
    fontSize : 25,
    // marginLeft : 20,
    color : 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign : 'center',
    position: 'absolute'
  },
  plus:{
    fontSize : 30,
    marginLeft : 320,
    color : 'white',
    fontWeight: 'bold',
    marginTop: 14,
    // alignItems : 'baseline'
  },

});
