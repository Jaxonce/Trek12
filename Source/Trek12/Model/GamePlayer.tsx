import Grid from "./Grid"
import GridTemplate from "./GridTemplate"
import OperationManager from "./OperationManager"

class GamePlayer{
    private Score: number
    private Penalties: number
    private Grid: Grid 
    private Operations: OperationManager 

    constructor(operations: OperationManager, gt: GridTemplate){
        this.Score = 0
        this.Penalties = 0
        this.Grid = new Grid(gt)
        this.Operations = operations
    }

    public setOperations

    public PlaceValue(idCell: number,value: number): void{
        var cell = this.getGrid().findCellById(idCell)
        if(cell!=null && cell.isEmpty()==true){
            cell.setValue(value)
        }
    }

    // public calculateScore(): score{
    //     // Count Chains
    //     this.getGrid().getCells().forEach(cell => )
    // }

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