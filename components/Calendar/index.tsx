import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { week, moths } from "../../Constants";
import { CalendarProps } from "../Types";
import { s } from "./style";
import { AntDesign as Icon} from "react-native-vector-icons";

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
  const [numbers, setNumbers] = useState<number[]>(eptyArray);

  useEffect(() => {
    const firstNumber = getPositionFirstDayOfMonth(date);
    const lastNumber = firstNumber + getNumberOfDaysInMonth(date);
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
    return numberDay === date.getDate();
  }

  function nextMonth(){
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };
  function previousMonth(){
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  return (
    <View style={s.calendar}>
      <View style={s.selectMonth}>
        <TouchableOpacity onPress={() => previousMonth()}>
          <Icon name="doubleleft" style={s.icon} />
        </TouchableOpacity>
        <Text style={s.labelMonth}>{moths[date.getMonth()]}</Text>
        <TouchableOpacity
        onPress={() => nextMonth()}>
          <Icon name="doubleright" style={s.icon} />
        </TouchableOpacity>
      </View>
      {week.map((day, index) => (
        <Text key={index} style={s.cells}>
          {day}
        </Text>
      ))}
      {numbers.map((n, index) => (
        <TouchableOpacity key={index} onPress={() => handleClickInDay(n)}>
          <Text style={[s.cells, currentDay(n) ? s.currentDay : {}]}>
            {n > 0 ? String(n) : ""}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
