import { CURRENT_GAME, CURRENT_PLAYER, CURRENT_GAMEFACTORY } from "../constants";
import Player from "../../Model/Player";
import Game from "../../Model/Game";
import classicTemplate from "../../Model/ClassicTemplate";
import ClassicOperationManager from "../../Model/ClassicOperationManager";
import Stats from "../../Model/Stats";


const initialState = {
  player: new Player(1,"defaultName", new Stats),
  game: new Game(new classicTemplate, new ClassicOperationManager, 19)
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_PLAYER:
      return { ...state, player: action.payload };
    case CURRENT_GAME:
      return { ...state, current_game: action.payload };
    case CURRENT_GAMEFACTORY:
      return { ...state, current_gamefactory: action.payload }
    default:
      return state;
  }
}