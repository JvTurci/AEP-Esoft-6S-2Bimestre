import { VStack, Image, Text, HStack, Center } from "native-base";
import CardLogo from "../assets/card_logo.png";

const BusCard = ({ cardNumber }) => {
  return (
    <Center>
      <VStack
        w="80"
        h="40"
        bg="blue.500"
        rounded="md"
        justifyContent="space-between"
      >
        <VStack pl={4}>
          <Image w={20} h={16} source={CardLogo} resizeMode="center" />
          <Text fontSize={20} fontWeight="semibold">
            {cardNumber}
          </Text>
        </VStack>
        <HStack bgColor="blue.900" rounded="md" p="2">
          <Text color="white" fontWeight="bold">
            TRANSPORTE
          </Text>
        </HStack>
      </VStack>
    </Center>
  );
};

export default BusCard;
