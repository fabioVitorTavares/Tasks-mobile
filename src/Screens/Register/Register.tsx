import { RegisterBackground } from "./styles";
import { RegisterContainer } from "./styles";
import { ButtonCadastrar } from "./styles";
import { ButtonCancelar } from "./styles";
import { LabelInput } from "./styles";
import { InputText } from "./styles";
import { LabelButton } from "./styles";
import { InputsContent } from "./styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    console.log("Log line 23: ", email, user, password, confirmPassword);
  }, [email, user, password, confirmPassword]);

  function handlePressCancelar() {
    navigation.goBack();
  }

  return (
    <RegisterBackground>
      <RegisterContainer>
        <InputsContent>
          <LabelInput>E-mail</LabelInput>
          <InputText onChangeText={setEmail} placeholder="E-mail" />
        </InputsContent>
        <InputsContent>
          <LabelInput>Usuário</LabelInput>
          <InputText onChangeText={setUser} placeholder="Usuário" />
        </InputsContent>
        <InputsContent>
          <LabelInput>Senha</LabelInput>
          <InputText onChangeText={setPassword} placeholder="Senha" />
        </InputsContent>
        <InputsContent>
          <LabelInput>Confirme a senha</LabelInput>
          <InputText
            onChangeText={setConfirmPassword}
            placeholder="Confirme a senha"
          />
        </InputsContent>
        <ButtonCadastrar onPress={() => {}}>
          <LabelButton>Cadastrar</LabelButton>
        </ButtonCadastrar>
        <ButtonCancelar onPress={handlePressCancelar}>
          <LabelButton>Cancelar</LabelButton>
        </ButtonCancelar>
      </RegisterContainer>
    </RegisterBackground>
  );
}
