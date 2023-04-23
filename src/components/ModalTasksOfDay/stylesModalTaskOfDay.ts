import { StyleSheet } from "react-native";
import { azul } from "../../Constants/Colors/colors";

const {displayFlexCenter} = StyleSheet.create({
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const styles = StyleSheet.create({
  BackModalTask: {
    ...displayFlexCenter,
    backgroundColor: '#0009',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  ModalTask: {
    ...displayFlexCenter,
    position: 'absolute',
    width: '80%',
    height: '80%',
    zIndex: 2,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: '10%'
  },
  IconClose: {
    position: 'absolute',
    zIndex: 3,
    top: 10,
    right: 10,
  },
  HeaderModal: {
    ...displayFlexCenter,
    height: '20%',
    width: '100%'
  },
  ListTasks: {
    ...displayFlexCenter,
    height: '80%',
    width: '90%',
  },
  ItemList: {
    ...displayFlexCenter,
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: azul
  },
  FlatList: {
    width: '100%',
    height: '100%',
  }
});