import React from "react";
import { Calendar } from "react-native-calendars";
import { Text } from "react-native";
import { Task } from "../task";

export function Application() {

  return (
    <>
      <Calendar>
        
      </Calendar>  
      <Task title={'ok'} />
    </>
  )
}