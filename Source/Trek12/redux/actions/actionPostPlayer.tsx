import AsyncStorage from "@react-native-async-storage/async-storage";
import  Player from "../../Model/Player";
import { setPlayer } from "./actionSetPlayer";


export const getPlayerById = (idPlayer : any) => {

  // @ts-ignore
  return async dispatch => {

    try {
        //inserer route de l'api dans fetch
        
        // const playerPromise = await fetch('https://examples.com/data.json', {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       firstParam: 'yourValue'
        //     })
        //   });
        const playerJson = await playerPromise.json();

        try {
            AsyncStorage.setItem("playerId", playerJson.id)
            AsyncStorage.setItem("playerPseudo", playerJson.pseudo)
           
          } catch (error) {
            console.log(error);
          }
        
        //inserer donnée correspondonte de playerJson
        const player = new Player();
        dispatch(setPlayer(player));
    } catch (error) {
        console.log('Error---------', error);
        //You can dispatch to another action if you want to display an error message in the application
        //dispatch(fetchDataRejected(error))
    }
  }
}