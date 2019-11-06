 
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// import {
//   Header
// } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

// const App: () => React$Node = () => {
const Items=()=> {
  return (
    <Container>
        <Header searchBar rounded style={{backgroundColor : '#21A69A' }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View style={{backgroundColor : 'green' , flex: 1}}>
        <Text>ITEMS</Text>
    </View>
    </Container>
  );
};


export default Items;
