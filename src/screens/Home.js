import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { VStack, Heading } from "native-base";
import { bgColor } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={bgColor}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <VStack>
        <Heading>BEM-VINDO</Heading>
      </VStack>
    </LinearGradient>
  );
};

export default Home;
