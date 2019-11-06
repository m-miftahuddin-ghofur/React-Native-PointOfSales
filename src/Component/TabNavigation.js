import React from 'react';
import { StackNavigator } from "react-navigation";
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import Products from './Products';
import Categories from './Categories';
import Items from './Items';

const TabNavigator = createBottomTabNavigator({
    Items : {
      screen : Items,
      navigationOptions : {
        tabBarLabel: 'Order',
        tabBarIcon: () => (
          <Icon type='AntDesign' name='home' />
        ),
      }
    },
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarLabel: 'Products',
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarLabel: 'Categories',
      }
    },
  },{
    initialRouteName: 'Items',
    order: ['Items','Products','Categories'],
})
    
const TabNavigation  = createAppContainer(TabNavigator);
export default TabNavigation;