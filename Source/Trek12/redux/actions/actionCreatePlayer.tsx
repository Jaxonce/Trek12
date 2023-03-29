import  Player from "../../Model/Player";


export const createPlayer = (player: Player) => {
  return {
    type: "CREATE_PLAYER",
    payload: player,
  }
}