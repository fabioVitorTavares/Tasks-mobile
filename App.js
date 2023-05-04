import { useFonts } from 'expo-font';
import { Application } from './src/components/Application';
import { Routes } from './src/Routes/Routes';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';



export default function App() {

  const [fontsLoaded] = useFonts({
    FiraCodeLight: require("./src/Assets/Fonts/FiraCode/FiraCode-Light.ttf"),
    FiraCodeRegular: require("./src/Assets/Fonts/FiraCode/FiraCode-Regular.ttf"),
    FiraCodeBold: require("./src/Assets/Fonts/FiraCode/FiraCode-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (    
    <Routes/> 
  );
}

