import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login/login";
import { Home } from "../Screens/Home/home";
import { Task } from "../Screens/Task/Task";
import { AppContext, AppContextProvider } from "../Context/appContext";
import { ElementType, ReactElement, useContext, useEffect } from "react";
import Register from "../Screens/Register/Register";

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
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />
          <Screen
            options={{ headerShown: false }}
            name="Task"
            component={Task}
          />
        </Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
