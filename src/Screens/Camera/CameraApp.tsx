import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CameraApp() {
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // if (!permission) ...

  // if (!permission.granted) ...

  // function toggleCameraType() {
  //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  // }

  console.log("Log line 17: ", typeof type);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Camera type={type}>
        <View>
          <TouchableOpacity>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Text>Camera</Text>
    </View>
  );
}
