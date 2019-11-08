import React, { Component, useState, useEffect } from 'react';
import { useSelector , useDispatch } from "react-redux";
import { Register } from "../Redux/Actions/Auth";
import {StyleSheet, Text, View,TouchableHighlight,Image, Alert} from 'react-native';
import { Container, Header, Content, Form,Icon, Item, Input, Label,Picker,  } from 'native-base';
import Axios from 'axios';
import {postProducts} from '../Redux/Actions/Products'


const AddProduct=(props)=> {
    // const productList = useSelector(state=>state.Products.productList);
    const dispatch = useDispatch();
    const [products, setProducts] = useState({name:'', discription:'',image: '', category_id:'', price:'', quantity:''});
    const [category, setCategory] = useState([]);

    const getCategory=()=>{
      Axios.get('http://192.168.100.132:5000/category')
      // .then(response=> console.log(response))
      .then(response=> setCategory(response.data.result))
    }

    const postAProducts= e => {
      dispatch(postProducts(products))
      .then(response => {
            props.navigation.navigate('Products')
          }
        )
      .catch (error => console.log (error));
    }

    // const handleChangeCategory=(e)=>{
    //   setProducts({category_id:e.target.value})
    // }
    const handleChange = name => e => {
    setProducts({ ...products, [name]: e.target.value });
  };
  
    
    useEffect ( () => {
      getCategory()
    },[])
  
    
    useEffect ( () => {
        console.log(products);
        
      },[products])

    return (
        <Container >
        <Header  style={styles.header}>
        <View >
            <Text style={styles.font}>Add Product</Text>
          </View>
      </Header> 
        <Content>
          <Form>
            <Item 
                floatingLabel
            >
              <Label>Name</Label>
              <Input onChangeText={(text) => {                    
                    setProducts({...products, name: text})}} />
            </Item>
            <Item 
                floatingLabel
                // onChange={handleChange('discription')}
            >
              <Label>Discription</Label>
              <Input onChangeText={(text) => {                    
                    setProducts({...products, discription: text})}} />
            </Item>
            <Item 
                floatingLabel
            >
              <Label>Image</Label>
              <Input onChangeText={(text) => {                    
                    setProducts({...products, image: text})}} />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                onValueChange={(text) => {setProducts({...products, category_id: text})}}
              >
                {category.map((item,index) => (
                    <Picker.Item label={item.category} key={index} value={item.id} />
              ))}
              </Picker>
            </Item>
            <Item 
                floatingLabel
            >
              <Label>Price</Label>
              <Input onChangeText={(text) => {                    
                    setProducts({...products, price: text})}}  />
            </Item>
            <Item 
                floatingLabel 
                last
            >
              <Label>Quantity</Label>
              <Input onChangeText={(text) => {                    
                    setProducts({...products, quantity: text})}} />
            </Item>
          </Form>
          <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={[styles.buttonContainer, styles.cancelButton]} onPress={() => props.navigation.navigate('Products')}>
              <Text style={styles.loginText}>Cancel</Text>
            </TouchableHighlight>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={postAProducts} >
               <Text style={styles.loginText}>Save</Text>
           </TouchableHighlight>
           
          </View>
          
        </Content>
      </Container>
    );
}

export default AddProduct; 


const styles = StyleSheet.create({
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginTop:15,
    width:170,
    borderRadius:30,
    marginHorizontal: 13
  },
  loginButton: {
    backgroundColor: "#21A69A",
  },
  cancelButton : {
    backgroundColor : '#f04343',
  },
  loginText: {
    color: 'white',
  },
  header : {
    backgroundColor : '#21A69A' 
  },
  font : {
    fontSize : 25,
    marginLeft: -70,
    color : 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign : 'center',
    position: 'absolute'
  },
})

{/* <Button>
<Text onPress={()=> props.navigation.navigate('Login')}>Sign Up</Text>
</Button> */}