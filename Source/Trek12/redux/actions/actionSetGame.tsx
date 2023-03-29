import  Game from "../../Model/Game";
import { CURRENT_GAME } from '../constants';

export const setGame = (game: Game) => {
  return {
    type: CURRENT_GAME,
    payload: game,
  };
}