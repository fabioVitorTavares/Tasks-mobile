import { StyleSheet } from "react-native"
export const s = StyleSheet.create({
  calendar: {
    width: 350,
    height: 395,
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
  },
  currentDay: {
    backgroundColor: 'red'
  },
  selectMonth: {
    width : '100%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  icon: {
    fontSize: 30,
  },
  labelMonth: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})