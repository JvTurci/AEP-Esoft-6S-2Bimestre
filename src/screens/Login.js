import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { HStack, Icon, VStack, Checkbox, Heading, Text, useToast } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { bgColor } from "../styles/global";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { user } from "../service/config"

const Login = ({ navigation, signIn }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const toast = useToast();

  const realizaLogin = () => {
    if(validarLogin()){
      navigation.navigate('Home');
    }
    else{
      toast.show({
        title: "Email ou Senha Inválido!",
        placement: "top",
        bgColor: "red.500"
      });
    }
  }

  function validarLogin(){
    return (email === user.email && password === user.senha)
  }

  return (
    <LinearGradient colors={bgColor} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VStack w="1/2" p={10}>
        <Heading textAlign="center" color="gray.100">SEU CARTÃO DIGITAL</Heading>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Senha"
          type={hidePassword ? "password" : "text"}
          value={password}
          onChangeText={setPassword}
          mb={4}
          InputRightElement={
            <Icon
              as={
                <Entypo
                  name={hidePassword ? "eye" : "eye-with-line"}
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}
                />
              }
              size={8}
              mr={6}
              color="white"
            />
          }
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
          <Button title="Entrar" w={32} h={10} onPress={realizaLogin}/>
        </HStack>
        <VStack alignItems="center">
          <Button 
            title="Cadastrar"
            w={38}
            onPress={() => {navigation.navigate('NewAccount')}}
          />
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
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
