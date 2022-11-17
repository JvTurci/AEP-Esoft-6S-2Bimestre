import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/styles/theme";
import Routes from "./src/routes";

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;