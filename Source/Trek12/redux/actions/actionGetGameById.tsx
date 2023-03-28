import AsyncStorage from "@react-native-async-storage/async-storage";
import  Game from "../../Model/Player";
import { setGame } from "./actionSetGame";


export const getGameById = (idGame : any) => {

  // @ts-ignore
  return async dispatch => {

    try {
        //inserer route de l'api dans fetch
        const gamePromise = await fetch('' + idGame);
        const gameJson = await gamePromise.json();

        try {
            AsyncStorage.setItem("gameId", gameJson.id)
          } catch (error) {
            console.log(error);
          }
        
        //inserer donnée correspondonte de playerJson
        const game = new Game();
        dispatch(setGame(game));
    } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
    }
  }
}