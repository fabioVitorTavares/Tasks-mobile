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
      style={styles.touch}
      onPress={functionf}
    >
    <Text>Press Here</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
