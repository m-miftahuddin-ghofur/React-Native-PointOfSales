import React from "react";
// import TabNavigation  from './src/Component/TabNavigation';
// import Login from './src/User/Login';
// import Register from './src/User/Register';

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from "native-base";
import TabNavigation from './src/Component/TabNavigation';


const App = () => {
  return (
      <TabNavigation />
  )
}

export default App;

// const appStackNavigator = createStackNavigator({
//   Login : Login,
//   Register : Register,
//   // TabNavigation  : TabNavigation 
// })

// const AppContainer = createAppContainer(appStackNavigator)