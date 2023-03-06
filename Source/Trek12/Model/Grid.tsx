import Cell from "./Cell";
import Celltype from "./Celltype";

class Grid{

    private Cells: Cell[]
    private Size: number

    constructor() {
        this.Cells = [];
        this.Size = 0;
    }

    public addCell(id: number, value: number, type:Celltype): void{

        if(this.findCellById(id)==null){
            this.Cells.push(new Cell(id,value,type))
        }
    }

    public getCells(): Cell[]{
        return this.Cells
    }

    public findCellById(id: number): Cell {
        for (const cell of this.Cells) {
          if (cell.getId() == id) {
            return cell;
          }
        }
        return null
      }
    public getSize(): number{
        return this.Size
    }

    public setSize(): void{
        this.Size = this.Cells.length
    }
}

export default Grid