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

export const styles = StyleSheet.create({
  ScrrenCamera: {
    ...displayFlexCenter,
    ...widthHeight100percent,
  },
  Buttons: {
    ...displayFlexCenter,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  
  },
  ButtonsContent: {
    ...displayFlexCenter,
    width: 70,
    height: 70,
  },
  CronometroContent: {
    ...displayFlexCenter,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    position: 'absolute',
    bottom: 90,
  
  },
  Cronometro: {
    color: "#fff",
    textAlign: "center",
    width: 70 
  }

});