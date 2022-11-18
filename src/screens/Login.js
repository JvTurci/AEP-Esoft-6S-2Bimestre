import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { HStack, VStack, Checkbox, Heading, Text, useToast } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import { bgColor } from "../styles/global";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import { user } from "../service/config";

const Login = ({ navigation, signIn }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const toast = useToast();

  const realizaLogin = () => {
    if (validarLogin()) {
      navigation.navigate("Home");
    } else {
      toast.show({
        title: "Email ou Senha Inválido!",
        placement: "top",
        bgColor: "red.500",
      });
    }
  };

  function validarLogin() {
    return email === user.email && password === user.senha;
  }

  const resetPassword = () => {
    toast.show({
      title: "Encaminhamos um email para redefir sua senha!",
      placement: "top",
      bgColor: "primary.500",
    });
  };

  return (
    <LinearGradient
      colors={bgColor}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <VStack w="1/2" p={10}>
        <Heading textAlign="center" color="gray.100">
          NOME DO APP{"\n"}SEU CARTÃO DIGITAL
        </Heading>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <InputPassword
          value={password}
          onChange={setPassword}
          placeholder="Senha"
        />
        <HStack justifyContent="space-between" alignItems="center" mb={8}>
          <Checkbox
            isChecked={checkBox}
            colorScheme="green"
            onChange={() => setCheckBox(!checkBox)}
          >
            <Text color="gray.100" fontSize="md">
              Lembrar senha
            </Text>
          </Checkbox>
          <Button title="Entrar" w={32} h={10} onPress={realizaLogin} />
        </HStack>
        <VStack alignItems="center">
          <Button
            title="Cadastrar"
            w={38}
            mb={4}
            onPress={() => {
              navigation.navigate("NewAccount");
            }}
          />
          <TouchableOpacity onPress={resetPassword}>
            <Text fontSize="md" underline color="gray.100">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </LinearGradient>
  );
};

export default Login;
