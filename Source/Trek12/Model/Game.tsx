import ClassicGameFactory from "./ClassicGameFactory";
import ClassicOperationManager from "./ClassicOperationManager";
import GamePlayer from "./GamePlayer";
import GridTemplate from "./GridTemplate";
import OperationManager from "./OperationManager";
import Player from "./Player";

class Game{
    private Players: Map<Player,GamePlayer>
    private Winner: Player
    private DiceHistory: Array<[number, number]>
    private ActualTurn: number
    private gridTemplate: GridTemplate
    private operationManager: OperationManager
    private maxTurns: number

    constructor(gt: GridTemplate, om: OperationManager, maxTurns: number){
        this.DiceHistory = new Array()
        this.setActualTurn(1)
        this.Players = new Map<Player,GamePlayer>()
        this.gridTemplate = gt
        this.operationManager = om
        this.maxTurns = maxTurns
    }

    public addPlayer(p: Player): boolean{
        if(this.getPlayers().has(p)){
            return false 
        }
        
        this.Players.set(p, new GamePlayer(this.getOperationManager(), this.getGridTemplate()))
        return true
    }

    public pushDiceHistory(val1: number, val2: number): void{
        this.DiceHistory.push([val1, val2])
    }

    public rollDice(min: number, max: number): number{
        const PossibleValues = max - min + 1;

        const RandomNumber = Math.floor(Math.random() * PossibleValues) + min;
        return RandomNumber;
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

    public nextTurn(): void{
        if(this.getActualTurn() == this.getMaxTurns()){
            this.endGame()
        }
        else{
            this.incrementTurn()
            var value1 = this.rollDice(0,5)
            var value2 = this.rollDice(1,6)
            this.pushDiceHistory(value1, value2)
        }
    }

    public endGame(): void{
        // TODO
    }

    public setActualTurn(x: number){
        this.ActualTurn = x
    }

    public getOperationManager(): OperationManager{
        return this.operationManager
    }

    
    public getGridTemplate(): GridTemplate{
        return this.gridTemplate
    }

    public getMaxTurns(): number{
        return this.maxTurns
    }
}

export default Game 