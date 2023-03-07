import ClassicGameMode from "./ClassicGameMode";
import ClassicOperationManager from "./ClassicOperationManager";
import GameMode from "./GameMode";
import GamePlayer from "./GamePlayer";
import OperationManager from "./OperationManager";
import Player from "./Player";

class Game{
    private Players: Map<Player,GamePlayer>
    private Winner: Player
    private DiceHistory: Array<Array<number>>
    private Gamemode: GameMode
    private ActualTurn: number

    constructor(g: GameMode){
        this.DiceHistory = new Array<Array<number>>()
        this.Gamemode = g
        this.setActualTurn(1)
        this.Players = new Map<Player,GamePlayer>()
    }

    public addPlayer(p: Player): boolean{
        if(this.getPlayers().has(p)){
            return false 
        }
        
        this.Players.set(p, new GamePlayer(this.selectOperationManager()))
        return true
    }

    public pushDiceHistory(val1: number, val2: number): void{
        this.DiceHistory.push([val1, val2])
    }

    /*
    public rollDice(min: number, max: number): number{
        const PossibleValues = max - min + 1;

        const RandomNumber = Math.floor(Math.random() * PossibleValues) + min;
        return RandomNumber;
    }
    */
   public selectOperationManager(): OperationManager{
        switch(true){
            case this.getGameMode() instanceof ClassicGameMode:
                return new ClassicOperationManager
        }
   }

   public incrementTurn(){
        this.setActualTurn(this.getActualTurn()+1)
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

    public getActualTurn(): number{
        return this.ActualTurn
    }

    public setWinner(p: Player): void{
        this.Winner = p
    }

    public nextTurn(a: number, b:number): void{
    }

    public getGameMode(): GameMode{
        return this.Gamemode
    }

    public setGameMode(g: GameMode){
        this.Gamemode = g
    }

    public setActualTurn(x: number){
        this.ActualTurn = x
    }
}

export default Game 