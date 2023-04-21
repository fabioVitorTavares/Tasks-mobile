import { View, Text, TouchableOpacity } from "react-native";
import { ModalTaskProps } from "../../Types/types";
import { AntDesign as Icon } from "react-native-vector-icons";
import {
  stylesModalTask,
  stylesIconClose,
  stylesBackModalTask,
} from "./stylesModalTask";

export default function ModalTask({ props, onClose }: ModalTaskProps) {
  const { title, id } = props;
  function IconClose() {
    return (
      <TouchableOpacity style={stylesIconClose} onPress={onClose}>
        <Icon name="closesquare" size={36} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={stylesBackModalTask}>
      <View style={stylesModalTask}>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <IconClose />
      </View>
    </View>
  );
}
