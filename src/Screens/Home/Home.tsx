import { View, Text } from "react-native";
import {
  BackgroundApp,
  TitleHome,
  ContentHome,
  CardMenu,
  styles,
} from "./styles";

export default function Home() {
  return (
    <View style={styles.backgroundApp}>
      <TitleHome>Tarefas</TitleHome>
      <ContentHome>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
      </ContentHome>
    </View>
  );
}
