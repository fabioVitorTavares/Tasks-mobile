import styled from "styled-components";
import { displayFlexCenter, textAlign } from "../../Styles/DefaultStyles";
import * as Color from "../../Styles/Colors";

function dark(theme: string) {
  return theme === "dark";
}

export const RegisterBackground = styled.View`
  ${displayFlexCenter}
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    dark(theme) ? Color.darkBackground : Color.lightBackground};
`;

const a = `${({ theme }) =>
  `background-color: ${`Color.${theme}Background`}`};`;

export const RegisterContainer = styled.View`
  ${displayFlexCenter}
  height: 500px;
  width: 80%;
  padding: 20px;
  border: 1px solid black;
  justify-content: space-evenly;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
  ${displayFlexCenter}
  background-color: red;
  height: 40px;
  width: 100%;
`;

export const TextCadastrar = styled.Text`
  ${textAlign}
  color: ${({ theme }) =>
    dark(theme) ? Color.darkFontColor : Color.ligthfontColor}
`;

export const TextImputCadastrar = styled.TextInput`
  border: 1px solid black;
  width: 100%;
  height: 40px;
  padding-left: 10px;
`;
