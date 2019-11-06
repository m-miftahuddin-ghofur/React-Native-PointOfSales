import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { TouchableOpacity } from "react-native";
// export default class InlineLabelExample extends Component {

const Login=(props)=> {
    return (
      <Container>
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
      </Container>
    );
}

export default Login;