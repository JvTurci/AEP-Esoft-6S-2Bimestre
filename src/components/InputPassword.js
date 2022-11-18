import { useState } from "react";
import { Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";
import Input from "./Input";

const InputPassword = ({ value, onChange, placeholder }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Input
      placeholder={placeholder}
      type={hidePassword ? "password" : "text"}
      value={value}
      onChangeText={onChange}
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
          size={6}
          mr={6}
          color="white"
        />
      }
    />
  );
};

export default InputPassword;
