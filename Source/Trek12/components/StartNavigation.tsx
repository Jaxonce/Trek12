import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import JoinGameScreen from '../screens/JoinGameScreen';
import CreateGameScreen from '../screens/CreateGameScreen';
import PauseScreen from '../screens/PauseScreen';
import GameScreen from '../screens/GameScreen';


export default function StartNavigation() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GameScreen">
          <Stack.Screen 
            name="GameScreen" 
            component={GameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="JoinGameScreen"
            component={JoinGameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PauseScreen"
            component={PauseScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }