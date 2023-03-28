import AsyncStorage from '@react-native-async-storage/async-storage';
import  Player from "../../Model/Player";
import { CURRENT_PLAYER } from '../constants';

export const setPlayer = (player: Player) => {
  return {
    type: CURRENT_PLAYER,
    payload: player,
  };
}