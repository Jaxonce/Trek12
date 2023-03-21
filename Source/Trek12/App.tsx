import * as ScreenOrientation from 'expo-screen-orientation';
import { useFonts } from 'expo-font';
import StartNavigation from './components/StartNavigation';
import React from 'react';


//Changer le landscape en right avant de commit
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sketch': require('./assets/fonts/Sketch-Block.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <StartNavigation></StartNavigation>
  );
}
