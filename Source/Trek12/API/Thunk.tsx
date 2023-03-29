import Player from "../Model/Player"
import { setPlayer } from "../redux/actions/actionSetPlayer"
import ClassicGameFactory from "../Model/ClassicGameFactory"
import { SetGameFactory } from "../redux/actions/actionSetGameFactory";
import { setGame } from "../redux/actions/actionSetGame";
import ClassicOperationManager from "../Model/ClassicOperationManager";
import ClassicTemplate from "../Model/ClassicTemplate";
import { appReducer } from "../redux/reducers/appReducer";
import GameFactory from "../Model/GameFactory";

export const getGameFactory = () => {
    //@ts-ignore
    return async dispatch => {
        try {
            var classicGF = new ClassicGameFactory()
            dispatch(SetGameFactory(classicGF))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getGame = () => {
    //@ts-ignore
    return async (dispatch, getState) => {
        try {
            const gameFactory: GameFactory = getState().appReducer.current_gamefactory
            const operationManager = new ClassicOperationManager
            const gridTemplate = new ClassicTemplate
            const maxTurns = 19
            const game = gameFactory.initialize(operationManager, gridTemplate, maxTurns)
            dispatch(setGame(game))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getPlayer = () => {
    //@ts-ignore
    return async dispatch => {
        try {
            var player = new Player
            dispatch(setPlayer(player))
        }
        catch (error) {
            console.log(error)
        }
    }
}