import { CURRENT_GAME, CURRENT_PLAYER, CURRENT_GAMEFACTORY } from "../constants";
import Player from "../../Model/Player";
import Game from "../../Model/Game";
import OperationManager from "../../Model/OperationManager";


const initialState = {
  player: new Player
}
  
  // @ts-ignore
  export function appReducer (state = initialState, action) {
    switch (action.type) {
      case CURRENT_PLAYER:
        return {...state, player: action.payload};
      case CURRENT_GAME:
        // @ts-ignore
        return {...state, current_game: action.payload};
      case CURRENT_GAMEFACTORY:
        return {...state, current_gamefactory: action.payload}
      default:
        return state;
    }
  }