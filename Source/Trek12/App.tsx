import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useFonts } from 'expo-font';



ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sketch': require('./assets/fonts/Sketch-Block.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <GameScreen></GameScreen>
  );
}
