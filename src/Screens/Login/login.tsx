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
import { LoadingProps } from "../../Types/types";

export function Login() {
  const { name, user, is, signin } = useContext(AppContext);
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [load, setLoad] = useState(false);
  const navigation = useNavigation();

  async function handleLoginClick() {
    setLoad(true);
    await signin(login, password);
    setLoad(false);
    if (is.Authenticated) {
      setLogin("");
      setPassword("");
      navigation.navigate("Home", { user: { id: user.id, name: user.name } });
    }
  }

  const Loading = ({ isLoading }: LoadingProps) => {
    return isLoading ? (
      <View style={stylesLoadin}>
        <ActivityIndicator size="large" color={"#00BFFF"} />
      </View>
    ) : null;
  };

  return (
    <View style={stylesLogin}>
      <Loading isLoading={load} />
      <View>
        <Text>Login</Text>
        <TextInput
          selectionColor={"#0005"}
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
          selectionColor={"#0005"}
        ></TextInput>
      </View>
      <Pressable style={stylesButtonLogin} onPress={handleLoginClick}>
        <Text style={stylesTextButtonLogin}>Login</Text>
      </Pressable>
    </View>
  );
}
