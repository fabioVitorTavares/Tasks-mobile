import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons as IconM, Entypo as IconE } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  stylesModalRegisterOptions,
  stylesBackModalRegisterOptions,
  stylesContentModalRegisterOptions,
  stylesFooterModalRegisterOptions,
  stylesTouchablePhotoAndVideo,
  stylesTouchableCancel,
} from "./styleModalRegisterOptions";
import { ModalRegisterOptionsProps } from "../../Types/types";

export default function ModalRegisterOptions({
  close,
}: ModalRegisterOptionsProps) {
  const navigation = useNavigation();

  return (
    <View style={stylesBackModalRegisterOptions}>
      <View style={stylesModalRegisterOptions}>
        <View style={stylesContentModalRegisterOptions}>
          <TouchableOpacity style={stylesTouchablePhotoAndVideo}>
            <IconE size={36} name="camera" />
            <Text>Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesTouchablePhotoAndVideo}>
            <IconE size={36} name="video-camera" />
            <Text>Video</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesFooterModalRegisterOptions}>
          <TouchableOpacity style={stylesTouchableCancel} onPress={close}>
            <IconM size={36} name="cancel" />
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
