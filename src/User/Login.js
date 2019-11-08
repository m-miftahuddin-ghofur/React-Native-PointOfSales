import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    AsyncStorage
  } from 'react-native';
import {Login} from '../Redux/Actions/Auth'
import { useSelector , useDispatch } from "react-redux";

const SignIn=(props)=> {
    const dataLogin = useSelector(state=>state.Auth.dataLogin)
    const dispatch = useDispatch();
    const [input,setInput] = useState({username:'',password:''})

    const postLogin =  e => {
      e.preventDefault();
       dispatch(Login(input))
    .then (response=> {
        console.log('response login');
        
        if(response.value.data.status==200){
          AsyncStorage.setItem('token',response.value.data.result.token)
          // setIsLogin(true)
        // console.log(AsyncStorage.getItem('token'));
        
          
        }
    })
    .catch (error => console.log (error));
  }

  AsyncStorage.getItem('token').then((token) => {if (token !== null) props.navigation.navigate('Router');});
    
    return (
      <View style={styles.container}>
        <View>
        <Image style={styles.logo} source={require('../assets/logo-pos.png')}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              // keyboardType="username"
              underlineColorAndroid='transparent'
              // onChangeText={(username) => setInput({username})}
              value={input.username}
              onChangeText={(text) => {setInput({...input, username: text})}}
              />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              // onChangeText={(password) => setInput({password})}
              value={input.password}
              onChangeText={(text) => {setInput({...input, password: text})}}
              />
        </View>

        <TouchableHighlight 
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={postLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.buttonContainer} 
        onPress={()=> props.navigation.navigate('addRegister')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b2d1cc',
  },
  logo :{
    width:200,
    height:210,
    justifyContent: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#21A69A",
  },
  loginText: {
    color: 'white',
  }
});

// ()=> props.navigation.navigate('TabNavigation')