import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import JoinGameScreen from '../screens/JoinGameScreen';
import CreateGameScreen from '../screens/CreateGameScreen';
import EndPartie from '../screens/EndPartie';

export default function StartNavigation() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EndPartie">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="CreateGameScreen" 
            component={CreateGameScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="JoinGameScreen"
            component={JoinGameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EndPartie"
            component={EndPartie}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }