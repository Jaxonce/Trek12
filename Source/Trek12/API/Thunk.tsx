import Player from "../Model/Player"
import { setPlayer } from "../redux/actions/actionSetPlayer"
import ClassicGameFactory from "../Model/ClassicGameFactory"
import { SetGameFactory } from "../redux/actions/actionSetGameFactory";

export const getGameFactory = () => {
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

export const getPlayer = () => {
    //@ts-ignore
    return async dispatch => {
        try {
            var player = new Player
            dispatch(setPlayer(player))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}