import { View, Text } from "react-native";
import { BackgroundApp, TitleHome, ContentHome, CardMenu } from "./styles";

export default function Home() {
  return (
    <BackgroundApp>
      <TitleHome>Tarefas</TitleHome>
      <ContentHome>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
      </ContentHome>
    </BackgroundApp>
  );
}
