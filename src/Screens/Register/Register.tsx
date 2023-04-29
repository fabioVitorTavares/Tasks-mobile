import styled from "styled-components";
import { Text, TextInput, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Register() {
  const RegisterBackground = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  return (
    <RegisterBackground>
      <Text>OK</Text>
      <TextInput onChangeText={() => console.log("Log line 17:")}></TextInput>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <TouchableOpacity>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </RegisterBackground>
  );
}
