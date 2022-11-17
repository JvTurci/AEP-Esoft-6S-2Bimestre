import { Button as NativeBaseButton, Text } from "native-base";

const Button = ({ title, ...rest}) => {
    return(
        <NativeBaseButton
            {...rest}
        >
            <Text
                color="gray.100"
                fontSize="sm"
            >
                {title}
            </Text>
        </NativeBaseButton>
    );
}

export default Button;