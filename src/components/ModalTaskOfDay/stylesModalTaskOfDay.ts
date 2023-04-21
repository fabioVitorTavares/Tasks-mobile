import { StyleSheet } from "react-native";

const {displayFlexCenter} = StyleSheet.create({
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const {stylesItemList, stylesHeaderModal,stylesListTasks, stylesModalTask, stylesIconClose, stylesBackModalTask } = StyleSheet.create({
  stylesBackModalTask: {
    ...displayFlexCenter,
    backgroundColor: '#0009',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  stylesModalTask: {
    ...displayFlexCenter,
    position: 'absolute',
    width: '80%',
    height: '80%',
    zIndex: 2,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: '10%'
  },
  stylesIconClose: {
    position: 'absolute',
    zIndex: 3,
    top: 10,
    right: 10,
  },
  stylesHeaderModal: {
    ...displayFlexCenter,
    height: '30%',
    width: '100%'
  },
  stylesListTasks: {
    ...displayFlexCenter,
    height: '70%',
    width: '100%',
  },
  stylesItemList: {
    ...displayFlexCenter,
    width: '100%',
    height: 50,
    backgroundColor: '#985'
  }
});