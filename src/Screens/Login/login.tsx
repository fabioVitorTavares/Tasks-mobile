import React, { useEffect, useState, useContext, ProviderProps } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../Context/appContext";
import {
  stylesLogin,
  stylesButtonLogin,
  stylesTextInput,
  stylesTextButtonLogin,
} from "./loginStyles";

export function Login() {
  const {name, user, isAuthenticated, signin} = useContext(AppContext);
  const navigation = useNavigation();
  
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {}, [isAuthenticated]);

  function handleLoginClick() {
    signin(login, password);
    console.log(isAuthenticated, "authenticated");

    if (isAuthenticated) navigation.navigate("Home",{user: {id: user.id, name: user.name}});
  }

  console.log(isAuthenticated);
  return (
    <View style={stylesLogin}>
      <View>
        <Text>Login</Text>
        <TextInput style={stylesTextInput} onChangeText={setLogin}></TextInput>
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput
          style={stylesTextInput}
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
      </View>
      <Pressable style={stylesButtonLogin} onPress={handleLoginClick}>
        <Text style={stylesTextButtonLogin}>Login</Text>
      </Pressable>

      <Text>{ name}</Text>
    </View>
  );
}
