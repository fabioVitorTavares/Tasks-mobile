import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  ScrollViewComponent,
  Text,
  View,
} from "react-native";
import { Calendar } from "../Calendar";
import { Task } from "../task";
import { getAllTasks } from "../../Api/api";
import { S } from "./style";
import { TTask } from "../Types";
import { Login } from "../../Pages/Login/login";

export function Application() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  async function loadData() {
    const response = await getAllTasks();
    setTasks(response.data);
  }

  // useEffect(() => {
  //   loadData();
  // }, []);

  function renderTask(task: ListRenderItemInfo<TTask>) {
    return (
      
      <Task
        key={task.item.id}
        description={task.item.description}
        date={task.item.date}
        dateCreated={task.item.dateCreated}
        id={task.item.id}
      />
    );
  }

  function getLayoutTask(tasks: TTask[], index: number){
    return {
      length: 100,
      offset: 100 * index,
      index
    }
  }

  return (
    <View style={S.application}>
      {/* <Calendar date={date} setDate={setDate} /> */}

      {/* <Button
        onPress={() => console.log(tasks.length)}
        title="Ok"
        color="#564"
        accessibilityLabel="Learn more about this purple button"
      /> */}

      {/* {tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          date={task.date}
          dateCreated={task.dateCreated}
          id={task.id}
        />
      ))} */}

      {/* <FlatList
        data={tasks}
        renderItem={(task) => renderTask(task)}
        getItemLayout={getLayoutTask}
        persistentScrollbar={true}
        initialScrollIndex={0}
      /> */
      }

      <Login/>
    </View>
  );
}
