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
  const ok = Alert.alert('ok?')
};

type TaskProps = {
  title: string
}

export function Task( {title}: TaskProps) {
  return (
    <TouchableOpacity
      
      onPress={functionf}
    >
    <Text>Click</Text>
  </TouchableOpacity>
  );
}

