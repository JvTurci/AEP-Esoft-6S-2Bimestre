import { useState } from "react";
import { VStack, Heading, useToast, Text, HStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import { bgColor } from "../styles/global";

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
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <VStack w="1/2" p={10}>
        <Heading textAlign="center" color="gray.100">
          CADASTRO DE USUÁRIO
        </Heading>
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
