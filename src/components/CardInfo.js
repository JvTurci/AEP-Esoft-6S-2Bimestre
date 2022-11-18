import { VStack, Text, HStack  } from "native-base";
import IconButtonRounded from "./IconButtonRounded";

const CardInfo = ({ amount, showCash }) => {
    return(
        <VStack p="4" alignSelf="center" w="96" h="80" bgColor="gray.300" rounded="xl" justifyContent="space-between">
            <VStack>
                <Text fontSize={16} bold>
                    DADOS DA CONTA
                </Text>
                <Text>
                    R$ { showCash ? amount : ""}
                </Text>
            </VStack>
            <HStack justifyContent="space-around">
                <VStack alignItems="center">
                    <IconButtonRounded iconName="plus"/>
                    <Text fontSize={10}>HISTÓRICO</Text>
                </VStack>
                <VStack alignItems="center">
                    <IconButtonRounded iconName="plus"/>
                    <Text fontSize={10}>ADICIONAR SALDO</Text>
                </VStack>
                <VStack alignItems="center">
                    <IconButtonRounded iconName="plus"/>
                    <Text fontSize={10}>CARTÕES</Text>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default CardInfo;