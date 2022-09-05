import React from "react";
import { View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home'
import Login from './src/screens/Login'


const Stack = createStackNavigator();

 const App = ()=>  {

  return (

<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
  </NavigationContainer>


   );
};

const styles = StyleSheet.create({

});
export default App;


