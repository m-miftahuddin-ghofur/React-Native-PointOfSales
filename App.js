import React from "react";
// import TabNavigation  from './src/Component/TabNavigation';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";                                          
import { View, Text } from "native-base";
import Login from './src/User/Login';
import addRegister from './src/User/Register';
import Router from './src/Component/TabNavigation';


const App = () => {
  return (
      <AppContainer />
  )
}

export default App;

const appStackNavigator = createStackNavigator({
  Login : Login,
  addRegister : addRegister,
  Router  : Router,
},{
  headerMode: 'none',
})

const AppContainer = createAppContainer(appStackNavigator)