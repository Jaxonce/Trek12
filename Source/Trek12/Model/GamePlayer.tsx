import Cell from "./Cell"
import Grid from "./Grid"

class GamePlayer{
    private Score: number
    private Penalties: number
    private Grid: Grid  

    constructor(){
        this.Score = 0
        this.Penalties = 0
        this.Grid = new Grid
    }

    public PlaceValue(c: Cell,value: number){
        g = set
    }

    public setScore(s: number): void{
        this.Score = s
    }

    public setPenalties(p: number): void{
        this.Penalties = p
    }

    public getScore(): number{
        return this.Score
    }

    public getPenalties(): number{
        return this.Penalties
    }

    public getGrid(): Grid{
        return this.Grid
    }
}