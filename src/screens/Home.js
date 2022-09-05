import React from "react";
import { View,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

 const Home = ()=>  {

  return (

<View>

<TextInput
      label="Home"  
    />
</View>
  

   );
};

const styles = StyleSheet.create({

});
export default Home;


