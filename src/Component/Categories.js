 
import React, {useEffect} from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView 
} from 'react-native';
import { 
  Container, Header, Item, Input, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right
 } from 'native-base';
 import { getProducts } from '../Redux/Actions/Products'
 import { useSelector , useDispatch } from "react-redux";
 


const Categories=()=> {
  const productList = useSelector(state=>state.product.productList)
  const dispatch = useDispatch();
  
  // useEffect (()=>{
  //   dispatch(getProducts())
  // },[])

  return (
    <View>
      <Header searchBar rounded style={styles.header}>
      <View >
           <Text style={styles.font}>Category</Text>
         </View>
      </Header> 
      <ScrollView style={{marginHorizontal : 8}}>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index) => (
            <Card key={index}>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           ))}
      </ScrollView>
    </View>
  );
};


export default Categories;


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
    marginTop: 12,
    textAlign : 'center'
  }
});
