import React from "react";
import { View,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


 const Login = ()=>  {

  return (

<View>

<TextInput
      label="Login"  
    />
</View>
  

   );
};

const styles = StyleSheet.create({

});
export default Login;


