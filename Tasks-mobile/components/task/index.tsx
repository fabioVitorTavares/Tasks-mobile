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

const functionf = () => {
  Alert.alert("Click to");
};

type TaskProps = {
  title: string
}

export function Task( {title}: TaskProps) {
  return (
    <TouchableOpacity
      
      onPress={functionf}
    >
    <Text>Press Here</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    color: "#52f3g2",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
  },
});
