import { useState } from "react";
import { VStack, Heading, useToast, Text, HStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { bgColor } from "../styles/global";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import Header from "../components/Header";

const NewAccount = ({ navigation }) => {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const toast = useToast();

  function handleCreateAccount() {
    toast.show({
      title: "Encaminhamos um email para você!",
      placement: "top",
      bgColor: "primary.500",
    });

    navigation.navigate("ValidateAccount");
  }

  return (
    <LinearGradient
      colors={bgColor}
      style={{ flex: 1, padding:16, justifyContent: "center" }}
    >
      <VStack>
        <Header title="CADASTRO DE USUÁRIO" />
        <Input
          placeholder="Nome Completo"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="CPF: 999.999.999-99"
          value={CPF}
          onChangeText={setCPF}
        />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <InputPassword
          value={password}
          onChange={setPassword}
          placeholder="Senha"
        />
        <InputPassword
          value={confirmedPassword}
          onChange={setConfirmedPassword}
          placeholder="Confirmar senha"
        />
        <HStack justifyContent="space-around">
          <Button
            title="Cancelar"
            w={32}
            bg="red.500"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button title="Cadastrar" w={32} onPress={handleCreateAccount} />
        </HStack>
      </VStack>
    </LinearGradient>
  );
};

export default NewAccount;
