import { StyleSheet } from "react-native";
import { azul } from "../../Constants/Colors/colors";

const { displayFlexCenter, widthHeight100percent } = StyleSheet.create({
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widthHeight100percent: {
    width: '100%',
    height: '100%',
  }
}); 

export const styles = StyleSheet.create({
  ScreenTask: {
    ...displayFlexCenter,
    ...widthHeight100percent,
  },
  TitleAndDescription: {
    ...displayFlexCenter,
    width: '80%',
    height: '75%',
    backgroundColor: azul,
    borderRadius: 10
  },
  Options: {
    ...displayFlexCenter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 100,
  },
  Option: {
    ...displayFlexCenter,
    width: 80,
    height: 80,
    backgroundColor: azul,
    borderRadius: 10
  }
});
