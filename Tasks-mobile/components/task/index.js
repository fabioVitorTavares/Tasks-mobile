import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function Task() {
  return (
    <Text style={styles.task}>
      Tarefa {Math.random()}
    </Text>
  )
};



const styles = StyleSheet.create({
  task: {
    flex: 1,
    color: '#52f3g2',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
});