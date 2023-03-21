import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { TTask } from "../Types";

const functionf = () => {
  const ok = Alert.alert("ok?");
};

type TaskProps = {
  title: string;
};

export function Task({ date, dateCreated, description, id, user }: TTask) {
  return (
    <TouchableOpacity style={S.Task} onPress={functionf}>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
}

const S = StyleSheet.create({
  Task: {
    height: 100,
    width: 300,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
});
