import { VStack, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";

const IconButtonRounded = ({ iconName }) => {
    return(
        <VStack pb={2}>
            <IconButton size="md" variant="solid" rounded="full" _icon={{
                        as: Entypo,
                        name: iconName
            }} />
        </VStack>
    );
};

export default IconButtonRounded;