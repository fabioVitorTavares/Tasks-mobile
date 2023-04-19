import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login/login";
import { Home } from "../Screens/Home/home";
import { AppContext, AppContextProvider } from "../Context/appContext";
import { ElementType, ReactElement, useContext, useEffect } from "react";

const { Screen, Navigator } = createNativeStackNavigator();

export function Routes() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            options={{ headerShown: false}}
            name="Home"
            component={Home}
          />
          <Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
        </Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
