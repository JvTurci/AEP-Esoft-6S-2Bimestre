import { useState } from "react";
import {  Icon, VStack, Heading, useToast } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { bgColor } from "../styles/global";

const NewAccount = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmedPassword, setHideConfirmedPassword] = useState(true);
    const [samePasswords, setSamePasswords] = useState(true);
    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const verificarSenhas = (value) => {
        setConfirmedPassword(value);
        if(password === confirmedPassword)
            setSamePasswords(true);
        else
            setSamePasswords(false);
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
            <TextInput placeholder="Nome Completo" value={name} onChangeText={setName}/>
            <TextInput placeholder="CPF: 999.999.999-99" value={CPF} onChangeText={setCPF}/>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
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
            <Text color="red">{samePasswords ? "" : ""}</Text>
            <TextInput
                placeholder="Confirmar Senha"
                type={hideConfirmedPassword ? "password" : "text"}
                value={confirmedPassword} 
                onChangeText={(value) => {verificarSenhas(value)}}
                mb={4}
                InputRightElement={
                    <Icon
                        as={
                            <Entypo
                            name={hideConfirmedPassword ? "eye" : "eye-with-line"}
                            onPress={() => {
                                setHideConfirmedPassword(!hideConfirmedPassword);
                            }}
                            />
                        }
                        size={8}
                        mr={6}
                        color="white"
                    />
                }
            />
            <Button title="Cadastrar"/>
        </VStack>
        </LinearGradient>
    );
};

export default NewAccount;
