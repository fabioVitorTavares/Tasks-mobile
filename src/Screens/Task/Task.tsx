import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";
import {
  stylesScreenTask,
  stylesTitleAndDescription,
  stylesOptions,
  stylesOption,
} from "./stylesTask";

type TaskRouteParamsProps = {
  item: {
    title: string;
  };
};

export function Task() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const {
    item: { title },
  } = params as TaskRouteParamsProps;

  useEffect(() => {
    console.log("Log line 9: ", title);
  }, []);

  function handlePressReturn() {
    navigation.goBack();
  }

  function handlePressRegister() {
    navigation.navigate("CameraApp", { item: { id: title } });
  }

  return (
    <View style={stylesScreenTask}>
      <View style={stylesTitleAndDescription}>
        <Text>{title}</Text>
        <Text>Description of task</Text>
      </View>
      <View style={stylesOptions}>
        <TouchableOpacity style={stylesOption} onPress={handlePressReturn}>
          <Icon size={36} name="reply" />
          <Text>Return</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesOption} onPress={handlePressRegister}>
          <Icon size={36} name="camera" />
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesOption}>
          <Icon size={36} name="check" />
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}