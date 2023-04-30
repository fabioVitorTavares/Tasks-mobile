import { Text, TextInput, TouchableOpacity } from "react-native";
import {
  RegisterBackground,
  RegisterContainer,
  ButtonCadastrar,
  TextCadastrar,
  TextImputCadastrar,
} from "./styles";
import { useState } from "react";
export default function Register() {
  const [theme, setTheme] = useState("light");

  function handlePressCadastrar() {
    setTheme((prevThem) => (prevThem === "dark" ? "light" : "dark"));
    console.log(theme);
  }

  return (
    <RegisterBackground theme={theme}>
      <RegisterContainer>
        <TextImputCadastrar />
        <TextImputCadastrar />
        <TextImputCadastrar />
        <TextImputCadastrar />
        <ButtonCadastrar onPress={handlePressCadastrar}>
          <TextCadastrar theme={theme}>Cadastrar</TextCadastrar>
        </ButtonCadastrar>
      </RegisterContainer>
    </RegisterBackground>
  );
}
