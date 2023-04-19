import { StyleSheet } from "react-native";

const {displayFlexCenter} = StyleSheet.create({
  displayFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const {stylesModalTask, stylesIconClose } = StyleSheet.create({
  stylesModalTask: {
    ...displayFlexCenter,
    position: 'absolute',
    width: '80%',
    height: '80%',
    zIndex: 2,
    borderRadius: 15,
    backgroundColor: '#fff',
    backfaceVisibility: 'visible',
  },
  stylesIconClose: {
    bottom: '45%',
    left: '40%',    
  }
});