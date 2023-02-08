import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Calendar() {
  const week: String[] = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [numbers, setNumbers] = useState<number[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setNumbers([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10,
    ]);
  }, []);

  useEffect(() => {
    console.log(date.toString());
  }, [date]);

  return (
    <View style={styles.calendar}>
      {week.map((day) => (
        <Text style={styles.cells}>{day}</Text>
      ))}
      {numbers.map((number) => (
        <TouchableOpacity onPress={() => setDate(new Date(2023, 1, number))}>
          <Text style={styles.cells}>{String(number)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
