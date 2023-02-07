import React, { useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "../Calendar";
import { Task } from "../task";
import { styles } from "./style";

export function Application() {

  const [date, setDate] = useState<Date>(new Date());


  return (
    <View style={styles.application}>

      <Calendar/>
    </View>
  );
}
