import GamePlayer from "./GamePlayer";
import OperationManager from "./OperationManager";
import Player from "./Player";

class Game{
    private Players: Map<Player,GamePlayer>
    private Winner: Player
    private DiceHistory: Array<Array<number>>

    constructor(om: OperationManager){
        this.DiceHistory = []
    }

    public addPlayer(p: Player): boolean{
        if(this.getPlayers().has(p)){
            return false 
        }
        
        this.Players.set(p, new GamePlayer(new))
    }

    public getPlayers(): Map<Player, GamePlayer>{
        return this.Players
    }

    public getWinner(): Player{
        return this.Winner
    }

    public getDiceHistory(): Array<Array<number>>{
        return this.DiceHistory
    }

    public setWinner(p: Player): void{
        this.Winner = p
    }


}