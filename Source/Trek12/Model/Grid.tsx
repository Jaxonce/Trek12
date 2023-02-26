import Cell from "./Cell";
import Celltype from "./Celltype";

class Grid{

    private Cells: Cell[]
    private Size: number

    constructor() {
        this.Cells = [];
        this.Size = 0;
    }

    public addCell(x: number, y:number, v: number, type:Celltype): void{

        if(!this.findCell){
            this.Cells.push(new Cell(x,y,v,type))
        }
    }

    public getCells(): Cell[]{
        return this.Cells
    }

    public findCell(x: number, y: number): boolean {
        for (const cell of this.Cells) {
          if (cell.getX() === x && cell.getY() === y) {
            return true;
          }
        }
        return false;
      }
    public getSize(): number{
        return this.Size
    }

    public setSize(): void{
        this.Size = this.Cells.length
    }
}

export default Grid