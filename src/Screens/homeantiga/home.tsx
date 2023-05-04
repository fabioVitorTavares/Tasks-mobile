import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppContext } from "../../Context/appContext";
import { ModalTasksOfDay } from "../../components/ModalTasksOfDay/ModalTasksOfDay";
import CardTask from "../../components/CardTask/CardTask";
import {
  BackgroundApp,
  CardCalendar,
  CardMenu,
  ContainerCardsMenu,
  ContainerHomeInf,
  ContainerHomeSup,
  Gap,
  MenuHome,
  SafeAreaViewApp,
} from "./styles";

type ScreenHomeParams = {
  user: {
    id: string;
    name: string;
  };
};

export function Home() {
  const { name, signout, user, alterTheme } = useContext(AppContext);
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
        <CardTask data={item} />
      </TouchableOpacity>
    );
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
    // <RefreshControl>
    <BackgroundApp>
      <ContainerHomeSup>
        <SafeAreaViewApp>
          <FlatList
            data={dataDates}
            horizontal={true}
            initialScrollIndex={2}
            renderItem={renderItem}
            getItemLayout={getLayout}
            ListHeaderComponent={Gap}
            ListFooterComponent={Gap}
            ItemSeparatorComponent={Gap}
            ListEmptyComponent={Gap}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
          />
        </SafeAreaViewApp>
      </ContainerHomeSup>
      <ContainerHomeInf>
        <MenuHome>
          <ContainerCardsMenu>
            <CardMenu></CardMenu>
            <CardMenu></CardMenu>
          </ContainerCardsMenu>
          <CardCalendar></CardCalendar>
        </MenuHome>
      </ContainerHomeInf>
      {modalTaskVisible && (
        <ModalTasksOfDay date={dateSelected} onClose={closeModalTask} />
      )}
    </BackgroundApp>
  );
  {
    /* </RefreshControl> */
  }
}
