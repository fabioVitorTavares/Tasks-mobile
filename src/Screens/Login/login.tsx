import React, { useEffect, useState, useContext, ProviderProps } from "react";
import {
  ActivityIndicator,
  View,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../Context/appContext";
import {
  stylesLogin,
  stylesButtonLogin,
  stylesTextInput,
  stylesTextButtonLogin,
  stylesLoadin,
} from "./loginStyles";

export function Login() {
  const { name, user, is, signin } = useContext(AppContext);
  const navigation = useNavigation();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [load, setLoad] = useState(false);

  async function handleLoginClick() {
    console.log("Log line 31: ", is);
    setLoad(true);
    const a = signin(login, password);
    console.log("Log line 33: ", a);
    setTimeout(() => {
      setLoad(false);
      if (is.Authenticated) {
        setLogin("");
        setPassword("");
        navigation.navigate("Home", { user: { id: user.id, name: user.name } });
      }
    }, 2000);
  }

  type LoadingProps = {
    isLoading: boolean;
  };

  const Loading = ({ isLoading }: LoadingProps) => {
    return isLoading ? (
      <View style={stylesLoadin}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <View style={stylesLogin}>
      <Loading isLoading={load} />
      <View>
        <Text>Login</Text>
        <TextInput
          style={stylesTextInput}
          onChangeText={setLogin}
          value={login}
        ></TextInput>
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput
          style={stylesTextInput}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        ></TextInput>
      </View>
      <Pressable style={stylesButtonLogin} onPress={handleLoginClick}>
        <Text style={stylesTextButtonLogin}>Login</Text>
      </Pressable>

    </View>
  );
}
