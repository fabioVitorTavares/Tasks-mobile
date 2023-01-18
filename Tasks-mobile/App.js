import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { Task } from './components/task';



export default function App() {

 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Tasks!</Text>
      
      <ScrollView>
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
        <Task/>           
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
