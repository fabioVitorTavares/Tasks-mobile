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
    const lastNumber = firstNumber  + getNumberOfDaysInMonth(date);
    const subArray = getSubArrayFullDays(date);
    setNumbers([
      ...numbers.slice(0, firstNumber),
      ...subArray,
      ...numbers.slice(lastNumber, 41),
    ]); 
  }, [date]);

  function handleClickInDay(numberDay: number) {
    setDate(new Date(date.getFullYear(), date.getMonth(), numberDay));
  }

  function currentDay(numberDay: number) {
    return numberDay === date.getDate()
  }

  return (
    <View style={styles.calendar}>
      {week.map((day) => (
        <Text style={styles.cells}>{day}</Text>
      ))}
      {numbers.map((n) => (
        <TouchableOpacity onPress={() => handleClickInDay(n)}>
          <Text style={[styles.cells, currentDay(n) ? styles.currentDay : {}]  }>{n > 0 ? String(n) : ""}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
