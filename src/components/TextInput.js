import { Input as NativeBaseInput } from "native-base";

const TextInput = ({ ...rest }) => {
  return (
    <NativeBaseInput
      bg="gray.800"
      color="white"
      h={16}
      placeholderTextColor="gray.300"
      borderColor="gray.600"
      mt={4}
      fontSize="md"
      _focus={{
        bg: "gray.800",
        borderColor: "gray.600",
      }}
      {...rest}
    />
  );
};

export default TextInput;
