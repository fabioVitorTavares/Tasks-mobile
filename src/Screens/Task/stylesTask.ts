import { StyleSheet } from "react-native";

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

export const {stylesOption, stylesScreenTask, stylesTitleAndDescription, stylesOptions} = StyleSheet.create({
  stylesScreenTask: {
    ...displayFlexCenter,
    ...widthHeight100percent,
  },
  stylesTitleAndDescription: {
    ...displayFlexCenter,
    width: '80%',
    height: 200,
    backgroundColor: '#0099ff',
  },
  stylesOptions: {
    ...displayFlexCenter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 100,
  },
  stylesOption: {
    ...displayFlexCenter,
    width: 80,
    height: 80,
    backgroundColor: '#0099ff',
  }
});
