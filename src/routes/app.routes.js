import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import NewAccount from "../screens/NewAccount";
import ValidateAccount from "../screens/ValidateAccount";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="ValidateAccount" component={ValidateAccount} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppRoutes;
