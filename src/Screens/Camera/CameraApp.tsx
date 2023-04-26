import { useNavigation } from "@react-navigation/native";
import { Camera, CameraRecordingOptions, CameraType } from "expo-camera";
import { LegacyRef, useContext, useEffect, useRef, useState } from "react";
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
import { AppContext } from "../../Context/appContext";
import { ResizeMode, Video } from "expo-av";

export function CameraApp() {
  const [type, setType] = useState<CameraType>(CameraType.front);
  const [cameraPermission, requestCameraPermissions] =
    Camera.useCameraPermissions();
  const [microphonePermissions, requestMicrophonePermissions] =
    Camera.useMicrophonePermissions();

  const navigation = useNavigation();
  const [recording, setRecording] = useState(false);

  const [time, setTime] = useState(50);
  const [camera, setCamera] = useState<Camera>(null);

  const { videoGravado, setVideoGravado } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      await requestCameraPermissions();
      await requestMicrophonePermissions();
      const permissionCamera = await Camera.getCameraPermissionsAsync();
      const permissionMicrophone = await Camera.getMicrophonePermissionsAsync();
      if (!permissionCamera.granted || !permissionMicrophone.granted)
        navigation.goBack();
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

  useEffect(() => {
    console.log('Log line 67: ',recording)
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

  async function handlePressVideoRecord() {
    setRecording(true);
    console.log("Log line 97: ", recording);
    if (camera) {
      setExibirVideo(false);
      console.log("Log line 99: GRAVANDO");
      const video = await camera.recordAsync({ mute: false, maxDuration: 480 });
      setVideoGravado(video);
      console.log("video", video);
    }
  }

  async function handlePressStopVideoRecord() {
    const endVideo = await camera.stopRecording();
    console.log("stop record");
    console.log("end video", endVideo);
    setRecording(false);
    setExibirVideo(true);
  }

  function Cronometro() {
    return <Text style={styles.Cronometro}>{formatTime(time)}</Text>;
  }

  function ViewSpace() {
    return <View style={{ width: 70, backgroundColor: "red" }} />;
  }

  const playerVideo = useRef<Video>(null);
  const [exibirVideo, setExibirVideo] = useState<Boolean>(false);

  function PlayerVideo() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Video
          style={{ width: "100%", height: "100%" }}
          ref={playerVideo}
          source={{
            uri: videoGravado.uri,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          
        />
      </View>
    );
  }

  return (
    <>
      {exibirVideo ? (
        <PlayerVideo />
      ) : (
        <SafeAreaView style={styles.ScrrenCamera}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.ScrrenCamera}
            type={type}
          >
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
      )}
    </>
  );
}
