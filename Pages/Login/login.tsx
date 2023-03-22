import React, { useEffect, useState } from "react";
import { S } from "./style";
import { View, TextInput, Text, Button, Pressable } from "react-native";

function applyMaskCpfAndCnpj<String>(str: string) {
  const length = str.length;
  const arrayStr = str.split("");
  if (length < 12) {
    if (length > 3) arrayStr.splice(3, 0, ".");
    if (length > 6) arrayStr.splice(7, 0, ".");
    if (length > 9) arrayStr.splice(11, 0, "-");
  }
  if (length > 11) {
    arrayStr.splice(2, 0, ".");
    arrayStr.splice(6, 0, ".");
    arrayStr.splice(10, 0, "/");
    if (length > 12) arrayStr.splice(15, 0, "-");
  }
  return arrayStr.reduce((join, current) => `${join}${current}`, "");
}

const re = /\.|\-|\//g;

function cleanMask(str: string) {
  // return str
  //   .replace(".", "")
  //   .replace(".", "")
  //   .replace(".", "")
  //   .replace("/", "")
  //   .replace("-", "");
  return str.replace(re, '');
}

export function Login() {
  const [loginView, setLoginView] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setLoginView(applyMaskCpfAndCnpj(login));
  }, [login]);

  return (
    <View>
      <View>
        <Text>Login</Text>
        <TextInput
          style={S.TextInput}
          onChangeText={(text) => setLogin(cleanMask(text))}
          keyboardType="numeric"
          value={loginView}
          maxLength={18}
        ></TextInput>
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput
          style={S.TextInput}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <Pressable
        style={S.ButtonLogin}
        onPress={() => console.log(login, password)}
      >
        <Text style={S.TextButtonLogin}>Login</Text>
      </Pressable>
    </View>
  );
}
