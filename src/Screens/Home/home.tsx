import {
  ActivityIndicator,
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  stylesHome,
  stylesTodaysTasks,
  stylesSafeAreaView,
} from "./homeStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../../Context/appContext";

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

  function handleClickVoltar() {
    navigation.goBack();
  }

  function handleClickSair() {
    signout();
  }

  function handleClickTodaysTasks() {
    console.log("Log line 31: ", "clickk");
  }

  type TodayTasksProps = {
    title: string | number;
    id?: number;
  };

  function TodaysTasks({ title }: TodayTasksProps) {
    return (
      <Pressable style={stylesTodaysTasks} onPress={handleClickTodaysTasks}>
        <Text>Tarefas de {title}</Text>
      </Pressable>
    );
  }

  const data = [
    { title: 1, id: 11 },
    { title: 2, id: 12 },
    { title: "Hoje", id: 13 },
    { title: 3, id: 14 },
    { title: 4, id: 15 },
  ];

  function renderItem({ item }) {
    return <TodaysTasks title={item.title} />;
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
      <View style={{ width: "100%", height: "50%" }} />
    </View>
  );
}
