import { StyleSheet } from "react-native";

export const  { stylesHome, stylesTodaysTasks, stylesSafeAreaView } = StyleSheet.create({
  stylesHome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  stylesTodaysTasks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 200,
    borderRadius: 15,
    backgroundColor: '#0004',
  },
  stylesSafeAreaView: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  
});