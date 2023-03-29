import { CREATE_GAME, CREATE_GAMEFACTORY, CURRENT_GAME, CURRENT_PLAYER } from "../constants";
import Player from "../../Model/Player";
import Game from "../../Model/Game";
import OperationManager from "../../Model/OperationManager";


const initialState = {
  player: new Player
}
  
  // @ts-ignore
  export function appReducer (state = initialState, action) {
    switch (action.type) {
      case CREATE_GAMEFACTORY:
        return {...state, gameFactory: action.payload};
      case CREATE_GAME:
        return {...state, game: action.payload};
      case CURRENT_PLAYER:
        return {...state, player: action.payload};
      case CURRENT_GAME:
        // @ts-ignore
        return {...state, current_game: action.payload};
      default:
        return state;
    }
  }