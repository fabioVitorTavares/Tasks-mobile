import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";
import { styles } from "./stylesTask";

type TaskRouteParamsProps = {
  item: {
    id: string;
    title: string;
    createdDate: string;
    date: string;
    description: string;
  };
};

export function Task() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const {
    item: { id, title, createdDate, date, description },
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
    <View style={styles.ScreenTask}>
      <View style={styles.TitleAndDescription}>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{createdDate}</Text>
        <Text>{date}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.Options}>
        <TouchableOpacity style={styles.Option} onPress={handlePressReturn}>
          <Icon size={36} name="reply" />
          <Text>Return</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Option} onPress={handlePressRegister}>
          <Icon size={36} name="camera" />
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Option}>
          <Icon size={36} name="check" />
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
