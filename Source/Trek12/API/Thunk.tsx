import ClassicGameFactory from "../Model/ClassicGameFactory"
import { SetGameFactory } from "../redux/actions/actionSetGameFactory";

export const getGameFactory = () => {
    return async dispatch => {
        try{
            var classicGF = new ClassicGameFactory()
            dispatch(SetGameFactory(classicGF))
        }
        catch(error){
            console.log(error)
        }
    }
}