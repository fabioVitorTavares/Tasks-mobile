import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login/login";
import { Home } from "../Screens/Home/home";
import { AppContextProvider } from "../Context/appContext";

const { Screen, Navigator } = createNativeStackNavigator();

export function Routes() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Screen
            options={{ title: "Home", headerTitleAlign: "center" }}
            name="Home"
            component={Home}
          />
        </Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
