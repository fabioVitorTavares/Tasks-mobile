import { displayFlexCenter } from "../../Styles/DefaultStyles";
import styled from "styled-components";

import { StyleSheet } from "react-native";

const { dfc, wh100 } = StyleSheet.create({
  dfc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wh100: {
    width: "100%",
    height: "100%",
  }
});



export const styles = StyleSheet.create({
  backgroundApp: {
    ...dfc,
    ...wh100,
  }

});


export const BackgroundApp = styled.View`
  ${displayFlexCenter}
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentHome = styled.View`
  ${displayFlexCenter}
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CardMenu = styled.View`
  width: 45%;
  height: 30%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  border-width: 1px;
  border-radius: 10px;
  background-color: #0009;
`;

export const TitleHome = styled.Text`
  width: 100%;
  text-align: center;
  font-family: 'FiraCodeRegular'; 
  font-size: 30px;
  background-color: #035;
  color: #fff;
`;


