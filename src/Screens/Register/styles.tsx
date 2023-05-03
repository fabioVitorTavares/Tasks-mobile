import styled from "styled-components";
import { displayFlexCenter, textAlign } from "../../Styles/DefaultStyles";
import { colors } from "../../Styles/Colors";

export const RegisterBackground = styled.View`
  ${displayFlexCenter}
  width: 100%;
  height: 100%;
`;

export const RegisterContainer = styled.View`
  ${displayFlexCenter}
  margim-top: 500px;
  height: 400px;
  width: 80%;
  padding: 20px;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
  ${displayFlexCenter}
  background-color: ${colors.blue};
  height: 45px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ButtonCancelar = styled.TouchableOpacity`
  ${displayFlexCenter}
  background-color: ${colors.red};
  height: 45px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
`;

export const LabelInput = styled.Text`
  text-align: left;
  margin-bottom: 5px;
  font-size: 14px;
  letter-spacing: 1px;
`;

export const LabelButton = styled.Text`
  ${textAlign}
  font-weight: bold;
  font-size: 18px;
  color: ${colors.white};
  letter-spacing: 2px;
`;

export const InputText = styled.TextInput`
  border: 1px solid gray;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  border-radius: 10px;
`;

export const InputsContent = styled.View`
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
`;
