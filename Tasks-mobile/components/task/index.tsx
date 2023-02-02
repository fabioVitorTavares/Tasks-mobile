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

export function Task(t: string, key: Number) {
  return (
    <TouchableOpacity>
      <Button title="button" onPress={functionf}></Button>
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
