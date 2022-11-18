import { Heading } from "native-base";

const Header = ({ title }) => {
    return(
        <Heading textAlign="center" color="gray.100">{title}</Heading>
    );
};

export default Header;