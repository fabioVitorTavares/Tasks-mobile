import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  calendar: {
    width: 350,
    height: 350,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cells: {
    width: 45,
    height: 45,
    margin: 2.5,
    textAlign: 'center',
    textAlignVertical: 'center',    
  }
})