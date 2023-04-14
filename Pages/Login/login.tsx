import React, { useEffect, useState } from "react";
import { S } from "./style";
import { View, TextInput, Text, Button, Pressable } from "react-native";
import { useLogin } from "../../Hooks/useLogin";

export function Login() {
  const { user, isAuthenticated, signin, signout } = useLogin();
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  console.log(isAuthenticated);
  return (
    <View>
      <View>
        <Text>Login</Text>
        <TextInput style={S.TextInput} onChangeText={setLogin}></TextInput>
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput
          style={S.TextInput}
          secureTextEntry={true}
          onChangeText={setPassword}
        ></TextInput>
      </View>
      <Pressable style={S.ButtonLogin} onPress={() => signin(login, password)}>
        <Text style={S.TextButtonLogin}>Login</Text>
      </Pressable>
    </View>
  );
}
