import  Player from "../../Model/Player";
import { CURRENT_PLAYER } from '../constants';

export const setPlayersList = (playersList: Player []) => {
  return {
    type: CURRENT_PLAYER,
    payload: playersList,
  };
}