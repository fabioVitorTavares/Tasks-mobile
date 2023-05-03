import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppContext } from "../../Context/appContext";
import { ModalTasksOfDay } from "../../components/ModalTasksOfDay/ModalTasksOfDay";
import styled from "styled-components";
import { azul } from "../../Constants/Colors/colors";
import CardTask from "../../components/CardTask/CardTask";
import { displayFlexCenter } from "../../Styles/DefaultStyles";

type ScreenHomeParams = {
  user: {
    id: string;
    name: string;
  };
};

export function Home() {
  const { name, signout, user, backgroundColor, alterTheme } =
    useContext(AppContext);
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

  const BackgroundApp = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor};
    padding-vertical: 20px;
  `;

  const ContainerHomeSup = styled.View`
    ${displayFlexCenter}
    width: 100%;
    height: 40%;
  `;

  const ContainerHomeInf = styled.View`
    ${displayFlexCenter}
    width: 100%;
    height: 60%;
    padding: 20px;
  `;

  const SafeAreaViewApp = styled.SafeAreaView`
    ${displayFlexCenter}
    width: 100%;
    height: 200px;
  `;

  const MenuHome = styled.View`
    ${displayFlexCenter}
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #0004;
    padding: 20px;
  `;

  const Gap = styled.View`
    width: 15px;
  `;

  const CardCalendar = styled.View`
    ${displayFlexCenter}
    width: 100%;
    height: 45%;
    border-radius: 15px;
    background-color: #fff;
  `;

  const CardMenu = styled.View`
    ${displayFlexCenter}
    width: 45%;
    height: 100%;
    border-radius: 15px;
    background-color: #fff;
  `;

  const ContainerCardsMenu = styled.View`
    ${displayFlexCenter}
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 45%;
  `;

  return (
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
}
