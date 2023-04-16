import { View, Text, Pressable } from "react-native";
import { stylesHome } from './homeStyles'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../../Context/appContext";

type ScreenHomeParams = {
  user: {
    id: string,
    name: string,
  }
}

export function Home() {
  const { name } = useContext(AppContext);
  const navigation = useNavigation();
  const { params } = useRoute();
  const {user } = params as ScreenHomeParams;
  
  function handleVoltarClick(){
    navigation.goBack();
  };
  
  return (
    <View style={stylesHome}>
      <Text>Home</Text>
      <Text>{user.id }</Text>
      <Text>{user.name}</Text>
      <Pressable onPress={handleVoltarClick}>
        <Text>
          Voltar
        </Text>
      </Pressable>

      <Text>{name}</Text>
    </View>
  );
}
