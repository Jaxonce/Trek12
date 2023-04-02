import Player from "../Model/Player"
import { setPlayersList } from "../redux/actions/actionSetPlayersList"
import ClassicGameFactory from "../Model/ClassicGameFactory"
import { SetGameFactory } from "../redux/actions/actionSetGameFactory";
import { setGame } from "../redux/actions/actionSetGame";
import ClassicOperationManager from "../Model/ClassicOperationManager";
import ClassicTemplate from "../Model/ClassicTemplate";
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
            if(gameFactory instanceof ClassicGameFactory){
                const operationManager = new ClassicOperationManager
                const gridTemplate = new ClassicTemplate
                const maxTurns = 19
                const game = gameFactory.initialize(operationManager, gridTemplate, maxTurns)
                dispatch(setGame(game))
            }

        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getPlayersList = () => {
    //@ts-ignore
    return async dispatch => {
        try {
            const playersPromise = await fetch('https://codefirst.iut.uca.fr/containers/Trek_Prod-trek12api/AllPlayers')
            const playersListJson = await playersPromise.json()
            const playersList: Player[] = playersListJson.map(elt => new Player(elt["id"], elt["pseudo"], elt["stats"]))
            dispatch(setPlayersList(playersList))
        }
        catch (error) {
            console.log(error)
        }
    }
}