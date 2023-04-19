import { StyleSheet } from "react-native";

export const {stylesLoadin, stylesLogin, stylesTextButtonLogin, stylesTextInput, stylesButtonLogin} = StyleSheet.create({
  stylesLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  stylesTextInput: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#0005',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 20
  },
  stylesButtonLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    color: 'red',
    backgroundColor: '#00BFFF' ,
    borderRadius: 5,
    marginTop: 50,
    width: 250
  },
  stylesTextButtonLogin: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold"
  },
  stylesLoadin: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0009',
    zIndex: 2,
  }


});
