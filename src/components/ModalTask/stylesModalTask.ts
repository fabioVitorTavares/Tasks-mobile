import { StyleSheet } from "react-native";

const {displayFlexCenter} = StyleSheet.create({
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const {stylesModalTask, stylesIconClose, stylesBackModalTask } = StyleSheet.create({
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
  },
  stylesIconClose: {
    bottom: '45%',
    left: '40%',    
  }
});