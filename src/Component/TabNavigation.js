import React from 'react';
import { StackNavigator } from "react-navigation";
import { Container, Header, Item, Input, Button, Text, View } from 'native-base';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";  

import Products from './Products';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Categories from './Categories';
import Items from './Items';
import Account from './Account';

// const ProductNavigator = createStackNavigator({
//   Product : Product,
//   AddProduct : AddProduct,
// },{
//   headerMode: 'none',
// })



const TabNavigator = createBottomTabNavigator({
    Items : {
      screen : Items,
      navigationOptions : {
        // tintColor: 'red',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon type='FontAwesome' name='home' size={25} color={tintColor}/>
        ),
      }
    },
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: 'Products',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Icon type='FontAwesome' name='th-large' size={25} color={tintColor}/>
        ),
      },
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Icon type='FontAwesome' name='server' size={25} color={tintColor}/>
        ),
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Icon type='FontAwesome' name='user' size={25} color={tintColor}/>
        ),
      }
    },
  },{
    initialRouteName: 'Items',
    order: ['Items','Products','Categories', 'Account'],
    tabBarOptions: { 
      showIcon: true ,
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 12,
      },
   },
})

const BottomTab = createStackNavigator({
  TabNav : TabNavigator,
  AddProduct : AddProduct,
  EditProduct : EditProduct
},{
  headerMode: 'none',
})

    
const Router  = createAppContainer(BottomTab);
export default Router;