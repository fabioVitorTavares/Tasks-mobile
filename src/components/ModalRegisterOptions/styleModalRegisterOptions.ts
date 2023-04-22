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

export const { stylesBackModalRegisterOptions, stylesModalRegisterOptions, stylesContentModalRegisterOptions,
  stylesFooterModalRegisterOptions, stylesTouchablePhotoAndVideo, stylesTouchableCancel } = StyleSheet.create({
    stylesBackModalRegisterOptions: {
      ...displayFlexCenter,
      ...widthHeight100percent,
      position: 'absolute',
      zIndex: 2,
      backgroundColor: '#0009',
    },
    stylesModalRegisterOptions: {
      width: '80%',
      height: 300,
      backgroundColor: '#fff'
    },
    stylesContentModalRegisterOptions: {
      ...displayFlexCenter,
      justifyContent: 'space-around',
      flexDirection: 'row',
      height: '75%',
      width: '100%'
    },
    stylesFooterModalRegisterOptions: {
      ...displayFlexCenter,
      height: '25%',
      width: '100%',
    },
    stylesTouchablePhotoAndVideo: {
      ...displayFlexCenter,
      width: 80,
      height: 80,
      backgroundColor: '#0099ff',
    },
    stylesTouchableCancel: {
      ...displayFlexCenter,
      width: 80,
      backgroundColor: '#0099ff',
    }
});
