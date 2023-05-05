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



const Styles = StyleSheet.create({
  backgroundApp: {
    ...dfc,
    ...wh100,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  contentHome: {
    ...dfc,
    ...wh100,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
  },
  titleHome: {
    width: "100%",
    textAlign: "center",
    fontFamily: "FiraCodeRegular", 
    fontSize: 30,
    backgroundColor: "#035",
    color: "#fff",
  },
  cardMenu: {
    ...dfc,
    width:" 45%",
    height: " 30%",
    margin: "2.5%",
    borderRadius: 10,
    backgroundColor: "#0005",
  },
  titleCardMenu: {
    color: "#fff",
    fontFamily: "FiraCodeRegular",
    fontWeight: "bold",
    fontSize: 26
  }

});
 
export default Styles;

