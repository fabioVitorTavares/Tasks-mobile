import { ActivityIndicator, View, Text, Pressable } from "react-native";
import { stylesHome } from "./homeStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import { TouchableOpacity } from "react-native-gesture-handler";

type ScreenHomeParams = {
  user: {
    id: string;
    name: string;
  };
};

export function Home() {
  const { name, signout, user } = useContext(AppContext);
  const navigation = useNavigation();
  const { params } = useRoute();
  const param = params as ScreenHomeParams;


  function handleClickVoltar() {
    navigation.goBack();
  }

  function handleClickSair() {
    signout();
  }

  return (
    <View style={stylesHome}>
      <Text>Home</Text>
      <Text>{param.user.id}</Text>
      <Text>{param.user.name}</Text>
      <Pressable onPress={handleClickVoltar}>
        <Text>Voltar</Text>
      </Pressable>
      <Pressable onPress={handleClickSair}>
        <Text>Sair</Text>
      </Pressable>
      <Pressable
        style={{ borderWidth: 1, backgroundColor: "#0009" }}
        onPress={() => {
          console.log("Log line 43: ", user);
        }}
      >
        <Text>log</Text>
      </Pressable>
    </View>
  );
}
