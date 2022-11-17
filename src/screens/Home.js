import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View>
      <TextInput label="Home" />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
