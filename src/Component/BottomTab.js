 
import React from 'react';
import { StackNavigator } from "react-navigation";
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Products from './Products';
import Categories from './Categories';
import Items from './items';

// const TabNavigator = createBottomTabNavigator({
//   Items : {
//     screen : Items,
//     navigationOptions : {
//       tabBarLabel: 'Order',
//     }
//   },
//   Products: {
//     screen: Products,
//     navigationOptions: {
//       tabBarLabel: 'Products',
//     }
//   },
//   Categories: {
//     screen: Categories,
//     navigationOptions: {
//       tabBarLabel: 'Categories',
//     }
//   },
// },{
//   initialRouteName: 'Items',
//   order: ['Items','Products','Categories'],
// })

// const BottomTab = createAppContainer(TabNavigator);
// export default BottomTab;


const App =()=> {
  return (
    <Container>
        <View style={{backgroundColor : 'yellow' , flex: 1}}>
      <View style={{flex: 1, backgroundColor : '#34d2eb'}}></View>
      <View style={{height:54, backgroundColor : 'blue', flexDirection: 'row'}}>
        <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}></View>
          <Text>Items</Text>
        </View>
        <View style={{backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}></View>
          <Text>Products</Text>
        </View>
        <View style={{backgroundColor: 'grey', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}></View>
          <Text>Category</Text>
        </View>
        <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}></View>
          <Text>Log Out</Text>
        </View>
      </View>
  </View>
      </Container>  

    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
