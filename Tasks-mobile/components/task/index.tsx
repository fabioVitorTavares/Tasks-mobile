import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const log = () => {
  console.log('logou')
}

const newDate =  () => {
  return new Date().toLocaleString()
}



export function Task(t: string, key: Number) {
  return (
    <Text
      style={styles.task}      
    >
      Tarefa
      {
        newDate()}{
        Math.random() * 10
      }
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