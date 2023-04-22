import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ModalTaskProps } from "../../Types/types";
import { AntDesign as Icon } from "@expo/vector-icons";
import {
  stylesModalTask,
  stylesIconClose,
  stylesBackModalTask,
  stylesHeaderModal,
  stylesListTasks,
  stylesItemList,
} from "./stylesModalTaskOfDay";
import { useNavigation } from "@react-navigation/native";

const data = [
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
];

export default function ModalTaskOfDay({ props, onClose }: ModalTaskProps) {
  const { title, id } = props;

  const navigation = useNavigation();

  function IconClose() {
    return (
      <TouchableOpacity style={stylesIconClose} onPress={onClose}>
        <Icon name="closesquare" size={36} />
      </TouchableOpacity>
    );
  }

  type renderProps = {
    item: {
      title: string;
    };
  };

  function renderItem({ item }: renderProps) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Task", { item: item })}
      >
        <View style={stylesItemList}>
          <Text style={{ width: 100, textAlign: "center" }}> {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function Gap() {
    return <View style={{ height: 15 }} />;
  }

  return (
    <View style={stylesBackModalTask}>
      <View style={stylesModalTask}>
        <IconClose />
        <View style={stylesHeaderModal}>
          <Text>{id}</Text>
          <Text>{title}</Text>
        </View>
        <SafeAreaView style={stylesListTasks}>
          <FlatList
            data={data}
            renderItem={renderItem}
            initialScrollIndex={0}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={Gap}
            style={{ width: "100%" }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
