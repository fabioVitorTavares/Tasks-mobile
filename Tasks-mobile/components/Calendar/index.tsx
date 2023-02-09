import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CalendarProps } from "../Types";
import { styles } from "./style";

function getNumberOfDaysInMonth<Number>(onDate: Date) {
  return new Date(onDate.getFullYear(), onDate.getMonth() + 1, 0).getDate();
}

function getPositionFirstDayOfMonth<Number>(onDate: Date) {
  return new Date(onDate.getFullYear(), onDate.getMonth(), 1).getDay();
}

function eptyArray<Array>() {
  return new Array<number>(42).fill(0);
}

function getSubArrayFullDays<Array>(onDate: Date) {
  return new Array<number>(getNumberOfDaysInMonth(onDate))
    .fill(0)
    .map((n, i) => n + i + 1);
}




export function Calendar({ date, setDate }: CalendarProps) {
  const week: String[] = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [numbers, setNumbers] = useState<number[]>(eptyArray);

  useEffect(() => {
    const firstNumber = getPositionFirstDayOfMonth(date);
    const lastNumber = firstNumber - 1 + getNumberOfDaysInMonth(date);
    const subArray = getSubArrayFullDays(date);
    setNumbers([
      ...numbers.slice(0, firstNumber),
      ...subArray,
      ...numbers.slice(lastNumber, 41),
    ]); 
  }, [date]);

  function f() {
   
  }

  return (
    <View style={styles.calendar}>
      {week.map((day) => (
        <Text style={styles.cells}>{day}</Text>
      ))}
      {numbers.map((n) => (
        <TouchableOpacity onPress={() => f()}>
          <Text style={styles.cells}>{n > 0 ? String(n) : ""}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
