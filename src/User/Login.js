import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
// import { TouchableOpacity } from "react-native";
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

const Login=(props)=> {
    return (
      <View style={styles.container}>
        <View>
        <Image style={styles.logo} source={require('../assets/logo-pos.png')}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="TextInput"
              underlineColorAndroid='transparent'
              // onChangeText={(email) => this.setState({email})}
              />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              // onChangeText={(password) => this.setState({password})}
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=> props.navigation.navigate('TabNavigation')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=> props.navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
}

export default Login;

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

{/* <Container>
        <Header />
        
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button onPress={()=> props.navigation.navigate('Footer')}>
              <Text>Login</Text>
          </Button>
          <View>
              <TouchableOpacity onPress={()=> props.navigation.navigate('Register')}>
                  <Text>
                      Don't have Account? Register Now
                  </Text>
              </TouchableOpacity>
          </View>
        </Content>
      </Container> */}