import { ID_PLAYER, PSEUDO_PLAYER, CURRENT_GAME, CURRENT_PLAYER } from "../constants";


const initialState = {
    player: [],
    current_game: []
  }
  
  // @ts-ignore
  export function appReducer (state = initialState, action) {
    switch (action.type) {
      case CURRENT_PLAYER:
        return {...state, player: action.payload};
      case CURRENT_GAME:
        // @ts-ignore
        return {...state, current_game: action.payload};
      default:
        return state;
    }
  }