import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button, Text, View, TouchableOpacity  } from 'native-base';
// export default class InlineLabelExample extends Component {

const Register=(props)=> {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button>
              <Text onPress={()=> props.navigation.navigate('Login')}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
}

export default Register; 