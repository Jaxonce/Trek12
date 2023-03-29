import GameFactory from "../../Model/GameFactory";
import { CURRENT_GAMEFACTORY } from "../constants";
export const SetGameFactory = (GameFactory: GameFactory) => {
    return {
        type: CURRENT_GAMEFACTORY,
        payload: GameFactory,
    };
}