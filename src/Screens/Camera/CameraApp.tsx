import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { styles } from "./cameraAppStyles";
import {
  Entypo as Icon,
  FontAwesome as IconF,
  FontAwesome5 as IconF5,
} from "@expo/vector-icons";

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function CameraApp() {
  const navigation = useNavigation();
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(50);

  useEffect(() => {
    (async () => {
      const { granted } = await Camera.getCameraPermissionsAsync();
      if (!granted) {
        const responseRequest = await requestPermission();
        if (!responseRequest.granted) navigation.goBack();
      }
    })();
  }, []);

  useEffect(() => {
    const interval = {
      value: null,
    };
    if (recording) {
      interval.value = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
      clearInterval(interval.value);
    }

    return () => {
      clearInterval(interval.value);
    };
  }, [recording]);

  function formatTime(t: number) {
    const minutes = Math.trunc(t / 60);
    const seconds = t % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  function handlePressToggleCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  function handlePressCaptureFoto() {}

  function handlePressVideoRecord() {
    setRecording(true);
  }

  function handlePressStopVideoRecord() {
    setRecording(false);
  }

  function Cronometro() {
    return <Text style={styles.Cronometro}>{formatTime(time)}</Text>;
  }

  function ViewSpace() {
    return <View style={{ width: 70, backgroundColor: "red" }} />;
  }

  return (
    <SafeAreaView style={styles.ScrrenCamera}>
      <Camera style={styles.ScrrenCamera} type={type}>
        <View style={styles.Buttons}>
          <View style={styles.ButtonsContent}>
            <TouchableOpacity onPress={handlePressToggleCamera}>
              <Icon name="cycle" color="#fff" size={50} />
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonsContent}>
            <TouchableOpacity onPress={handlePressCaptureFoto}>
              <Icon name="circle" color="#fff" size={50} />
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonsContent}>
            {recording ? (
              <>
                <Cronometro />
                <TouchableOpacity onPress={handlePressStopVideoRecord}>
                  <IconF name="stop-circle" color="#fff" size={50} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={handlePressVideoRecord}>
                <IconF5 name="video" color="#fff" size={50} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Camera>
    </SafeAreaView>
  );
}
