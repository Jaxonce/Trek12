import Player from "../Model/Player"
import { setPlayer } from "../redux/actions/actionSetPlayer"

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