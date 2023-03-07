import Cell from "./Cell"
import Grid from "./Grid"
import OperationManager from "./OperationManager"

class GamePlayer{
    private Score: number
    private Penalties: number
    private Grid: Grid 
    private Operations: OperationManager 

    constructor(operations: OperationManager){
        this.Score = 0
        this.Penalties = 0
        this.Grid = new Grid()
        this.Operations = operations
    }

    public setOperations

    public PlaceValue(idCell: number,value: number): void{
        var cell = this.getGrid().findCellById(idCell)
        if(cell!=null && cell.isEmpty()==true){
            cell.setValue(value)
        }
    }

    public setScore(s: number): void{
        this.Score = s
    }

    public setPenalties(p: number): void{
        this.Penalties = p
    }

    public setGrid(g: Grid): void{
        this.Grid = g
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
export default GamePlayer