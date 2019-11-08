import React, { Component, useState, useEffect } from 'react';
import { useSelector , useDispatch } from "react-redux";
import { Register } from "../Redux/Actions/Auth";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';

const addRegister=(props)=> {
    const dataRegister = useSelector(state=>state.Auth.dataRegister);
    const dispatch = useDispatch();
    const [register, setRegister] = useState({name:'',username:'',password:''});

    const postRegister = async (e) => {
      e.preventDefault();
      await dispatch(Register(register))
      .then(response=> {
        // console.log(register);
        props.navigation.navigate('Login')
      })
      .catch (error => console.log(error)
      )
    }

    return (
      <View style={styles.container}>
        <View>
        <Image style={styles.logo} source={require('../assets/logo-pos.png')}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Fullname"
              keyboardType="default"
              underlineColorAndroid='transparent'
              value={register.name}
              onChangeText={(text) => {setRegister({...register, name: text})}}
              />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="username"
              underlineColorAndroid='transparent'
              value={register.username}
              onChangeText={(text) => {setRegister({...register, username: text})}}
              />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              // value={register.password}
              onChangeText={(text) => {setRegister({...register, password: text})}}
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={postRegister}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=> props.navigation.navigate('Login')}>
            <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
}

export default addRegister; 


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
})


{/* <Button>
<Text onPress={()=> props.navigation.navigate('Login')}>Sign Up</Text>
</Button> */}