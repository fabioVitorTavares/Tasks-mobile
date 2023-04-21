import {
  ActivityIndicator,
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  stylesHome,
  stylesTodaysTasks,
  stylesSafeAreaView,
} from "./homeStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/appContext";
import ModalTask from "../../components/ModalTaskOfDay/ModalTaskOfDay";

type ScreenHomeParams = {
  user: {
    id: string;
    name: string;
  };
};

export function Home() {
  const { name, signout, user } = useContext(AppContext);
  const navigation = useNavigation();
  const { params } = useRoute();
  const param = params as ScreenHomeParams;
  const [modalTaskVisible, setModalTaskVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState<TodayTasksProps>({
    title: "",
    id: 0,
  });

  function handleClickVoltar() {
    navigation.goBack();
  }

  function handleClickSair() {
    signout();
  }

  function handleClickTodaysTasks({ title, id }: TodayTasksProps) {
    setTaskSelected({ title, id });
    setModalTaskVisible(true);
  }

  type TodayTasksProps = {
    title: string | number;
    id?: number;
  };

  function TodaysTasks({ title }: TodayTasksProps) {
    return (
      <View style={stylesTodaysTasks}>
        <Text>{title}</Text>
      </View>
    );
  }

  const data = [
    { title: "Tarefas de segunda", id: 11 },
    { title: "Tarefas de terça", id: 12 },
    { title: "Tarefas de Hoje", id: 13 },
    { title: "Tarefas de quinta", id: 14 },
    { title: "Tarefas de sexta", id: 15 },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => handleClickTodaysTasks(item)}>
        <TodaysTasks title={item.title} />
      </TouchableOpacity>
    );
  }

  function Gap() {
    return <View style={{ width: 15 }} />;
  }

  function getLayout(itens: TodayTasksProps[], index: number) {
    return {
      length: 250,
      offset: 250 * index - 25,
      index,
    };
  }

  function closeModalTask() {
    setModalTaskVisible(false);
  }

  return (
    <View style={stylesHome}>
      <SafeAreaView style={stylesSafeAreaView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          ItemSeparatorComponent={Gap}
          getItemLayout={getLayout}
          initialScrollIndex={2}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={Gap}
          ListFooterComponent={Gap}
        />
      </SafeAreaView>
      {modalTaskVisible && (
        <ModalTask
          props={{ title: taskSelected.title, id: taskSelected.id }}
          onClose={closeModalTask}
        />
      )}
      <View style={{ width: "100%", height: "50%" }} />
    </View>
  );
}
