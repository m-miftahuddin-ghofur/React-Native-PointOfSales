 
import React, {useEffect, useState} from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView 
} from 'react-native';
import { 
  Container, Header, Item, Input, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right
 } from 'native-base';
 import { getProducts } from '../Redux/Actions/Products'
 import { useSelector , useDispatch } from "react-redux";
 


const Items=()=> {
  const productList = useSelector(state=>state.product.productList)
  const dispatch = useDispatch();
  const [params, setParams] = useState({sortby:'', order:'', name: ''})

  const handleChange = name => e => {
    setParams({ ...params, [name]: e.target.value });
  };

  useEffect (()=>{
    dispatch(getProducts())
  },[])

  useEffect(()=> {
    // console.log(getProducts(params));
    dispatch(getProducts(params))
    
  },[params])

  return (
    <View>
      <Header searchBar rounded style={styles.header}>
        <Item style={styles.search}>
          <Icon name="ios-search" />
          <Input 
            placeholder="Search"
            value={params.name}
            onChangeText={(text) => {setParams({...params, name: text})}}         
            // onChange={handleChange('name')}
          />
        </Item>
        <View style={styles.cart}>
          <Icon name="cart" />
        </View>
      </Header>
      <ScrollView> 
      <View style={styles.mart1}>
         <View style={styles.mart2}>
           <Text style={styles.font}>716mart</Text>
         </View>
         <View style={styles.mart3}>
           <TouchableOpacity style={styles.sort} onPress={ e => {setParams({...params, sortby: 'name'})}}><Text>Name</Text></TouchableOpacity>
           <TouchableOpacity style={styles.sort} onPress={ e => {setParams({...params, sortby: 'category'})}}><Text>Category</Text></TouchableOpacity>
           <TouchableOpacity style={styles.sort} onPress={ e => {setParams({...params, sortby: 'updated'})}}><Text>Date</Text></TouchableOpacity>
           <TouchableOpacity style={styles.sort} onPress={ e => {setParams({...params, order: 'ascending'})}}><Text>Asc</Text></TouchableOpacity>
           <TouchableOpacity style={styles.sort} onPress={ e => {setParams({...params, order: 'descending'})}}><Text>Desc</Text></TouchableOpacity>
         </View>
      </View>
      <View style={{marginHorizontal : 8, marginBottom:66}}>
      {productList.map((item,index) => (
      <Card key={index}>
          <CardItem cardBody >
              <Image source={{uri:item.image}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={{height: 45}}>
              <Left>
                  <Text>{item.name}</Text>
              </Left>
              <Body>
                  <Text>Rp. {item.price}</Text>
              </Body>
              <Right>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                  {/* <Icon active name="add" /> */}
                  <Text>Add To Cart</Text>
                  </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
           ))}
           </View>
      </ScrollView>
    </View>
  );
};


export default Items;


const styles = StyleSheet.create({
  header : {
    backgroundColor : '#21A69A' 
  },
  search: {
    marginRight : 25
  },
  sort : {
    flex: 1, 
    alignItems: 'center'
  },
  cart: {
    marginTop : 12,
    marginRight : 13,
    color: 'white'
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
    marginLeft : 20,
    color : 'white',
    fontWeight: 'bold',
    marginTop: 12
  }
});
