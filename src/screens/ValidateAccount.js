import { useState } from "react";
import { VStack, Heading, Text, HStack, useToast } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import Button from "../components/Button";
import { bgColor } from "../styles/global";
import { codigoVerificacao } from "../service/config";
const ValidateAccount = ({ navigation }) => {
  const [code, setCode] = useState("");
  const toast = useToast();

  function handleValidation() {
    console.log(code);
    if (code == codigoVerificacao) {
      toast.show({
        title: "Conta criada com sucesso!",
        bgColor: "success.500",
        placement: "top",
      });
      navigation.navigate("Home");
    } else {
      toast.show({
        title: "Código Inválido",
        bgColor: "error.500",
        placement: "top",
      });
    }
  }

  function handleResendCode() {
    toast.show({
      title: "Código reenviado!",
      bgColor: "primary.500",
      placement: "top",
    });
  }
  return (
    <LinearGradient
      colors={bgColor}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <VStack w="1/2" p={10}>
        <Heading textAlign="center" color="gray.100">
          VALIDAR ACESSO
        </Heading>
        <Text textAlign="center" color="gray.100" mt={8} fontSize="md">
          Verifique no seu email cadastrado {"\n"} um código de Segurança {"\n"}
          enviado por nós!
        </Text>
        <Text
          textAlign="center"
          color="gray.100"
          mt={8}
          fontSize="md"
          fontWeight="bold"
        >
          (Vaso não encontre verifique na caixa de spam ou reenvie o código)
        </Text>
        <HStack justifyContent="center">
          <Input
            placeholder="- - - -"
            w={48}
            textAlign={"center"}
            mt={8}
            value={code}
            onChangeText={setCode}
          />
        </HStack>
        <VStack alignItems="center">
          <Button
            title="Confirmar Cadastro"
            mt={8}
            w={72}
            onPress={handleValidation}
          />
          <Button
            title="Reenviar Código de Acesso"
            mt={8}
            w={72}
            onPress={handleResendCode}
          />
        </VStack>
      </VStack>
    </LinearGradient>
  );
};

export default ValidateAccount;
