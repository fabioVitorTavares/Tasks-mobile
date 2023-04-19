import { View, Text, TouchableOpacity } from "react-native";
import { ModalTaskProps } from "../../Types/types";
import { AntDesign as Icon } from "react-native-vector-icons";
import { stylesModalTask, stylesIconClose } from "./stylesModalTask";




export default function ModalTask({ props, onClose }: ModalTaskProps) {
  const {title, id} = props;
  return (
    <View style={stylesModalTask}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <TouchableOpacity style={stylesIconClose} onPress={onClose}>
        <Icon name="closesquare" size={36} />
      </TouchableOpacity>
    </View>
  );
}
