import Styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { Ionicons as Icon2 } from "@expo/vector-icons";
import { FontAwesome as Icon3 } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={Styles.backgroundApp}>
      <Text style={Styles.titleHome}>Tarefas</Text>
      <View style={Styles.contentHome}>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon name="tasks" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon2 name="today-sharp" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon2 name="notifications" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon name="tools" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Executar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon3 name="gears" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cardMenu}>
          <Icon name="user-edit" size={100} color="#fff" />
          <Text style={Styles.titleCardMenu}>Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
