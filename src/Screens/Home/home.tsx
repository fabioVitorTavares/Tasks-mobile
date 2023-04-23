import {
  View,
  Text,
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
import { ModalTasksOfDay } from "../../components/ModalTasksOfDay/ModalTasksOfDay";

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
  const [dateSelected, setDateSelected] = useState<String>("");

  function handleClickVoltar() {
    navigation.goBack();
  }

  function handleClickSair() {
    signout();
  }

  function handleClickTodaysTasks(date: String) {
    setDateSelected(date);
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

  const dataDates = [
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
    "06-01-2023",
    "07-01-2023",
  ];

  type dataDatesProps = {
    item: {
      date: string;
    };
  };

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => handleClickTodaysTasks(item)}>
        <TodaysTasks title={item} />
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
          data={dataDates}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
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
        <ModalTasksOfDay date={dateSelected} onClose={closeModalTask} />
      )}
      <View style={{ width: "100%", height: "50%" }} />
    </View>
  );
}
