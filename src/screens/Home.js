import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { VStack, Center, Text } from "native-base";
import { bgColor } from "../styles/global";
import Header from "../components/Header";
import CardInfo from "../components/CardInfo";
const Home = ({ navigation }) => {
  const[showCash, setShowCash] = useState(false);
  return (
    <LinearGradient
      colors={bgColor}
      style={{ flex: 1, padding:16, justifyContent: "center" }}
    >
      <VStack>
        <Header title="BEM VINDO" />
        <CardInfo amount="80,00" showCash={showCash}/>
      </VStack>
    </LinearGradient>
  );
};

export default Home;
