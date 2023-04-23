import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ModalTasksOfDaysProps } from "../../Types/types";
import { AntDesign as Icon } from "@expo/vector-icons";
import { styles } from "./stylesModalTaskOfDay";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const data = [
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
  { title: `Task  ${Math.ceil(Math.random() * 999)}` },
];

const dataTasksOfDays = [
  {
    data: "01-01-2023",
    totalsTasks: 1,
    tasks: [
      {
        id: "UUID1.1",
        title: "Titulo task 1",
        createdDate: "01-01-2023",
        date: "01-01-2023",
        description: "Descrição da task 1",
      },
    ],
  },
  {
    data: "02-01-2023",
    totalsTasks: 1,
    tasks: [
      {
        id: "UUI2.1",
        title: "Titulo task 1",
        createdDate: "02-01-2023",
        date: "02-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID2.2",
        title: "Titulo task 1",
        createdDate: "02-01-2023",
        date: "02-01-2023",
        description: "Descrição da task 1",
      },
    ],
  },
  {
    data: "03-01-2023",
    totalsTasks: 1,
    tasks: [
      {
        id: "UUID3.1",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.2",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.3",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.4",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.5",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.6",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.7",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.8",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
      {
        id: "UUID3.9",
        title: "Titulo task 1",
        createdDate: "03-01-2023",
        date: "03-01-2023",
        description: "Descrição da task 1",
      },
    ],
  },
];

export function ModalTasksOfDay({ date, onClose }: ModalTasksOfDaysProps) {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);

  function IconClose() {
    return (
      <TouchableOpacity style={styles.IconClose} onPress={onClose}>
        <Icon name="closesquare" size={36} />
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    const currentTasks = dataTasksOfDays.find(
      (currentDate) => currentDate.data === date
    );
    setTasks(currentTasks?.tasks);
  }, []);

  type renderProps = {
    item: {
      id: string;
      title: string;
      createdDate: string;
      date: string;
      description: string;
    };
  };

  function renderItem({ item }: renderProps) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Task", { item: item })}
      >
        <View style={styles.ItemList}>
          <Text style={{ width: 100, textAlign: "center" }}> {item.id}</Text>
          <Text style={{ width: 100, textAlign: "center" }}> {item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function Gap() {
    return <View style={{ height: 15 }} />;
  }

  function ItemVoid() {
    return <Text>Lista vazia</Text>;
  }

  return (
    <View style={styles.BackModalTask}>
      <View style={styles.ModalTask}>
        <IconClose />
        <View style={styles.HeaderModal}>
          <Text>{date}</Text>
        </View>
        <SafeAreaView style={styles.ListTasks}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
            initialScrollIndex={0}
            ItemSeparatorComponent={Gap}
            ListEmptyComponent={ItemVoid}
            showsVerticalScrollIndicator={false}
            style={styles.FlatList}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
