import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ModalTaskProps } from "../../Types/types";
import { AntDesign as Icon } from "react-native-vector-icons";
import {
  stylesModalTask,
  stylesIconClose,
  stylesBackModalTask,
  stylesHeaderModal,
  stylesListTasks,
  stylesItemList,
} from "./stylesModalTaskOfDay";

const data = [
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
  { title: "Task" },
];

export default function ModalTaskOfDay({ props, onClose }: ModalTaskProps) {
  const { title, id } = props;
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
      <TouchableOpacity onPress={() => console.log("Log line 67: ")}>
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
