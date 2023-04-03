import { IconSource } from "react-native-paper/lib/typescript/src/components/Icon";
import Cell from "./Cell";
import Celltype from "./Celltype";
import GridTemplate from "./GridTemplate";
import ICalculator from "./ICalculator";

class Grid {

  private Cells: Cell[]
  private Template: GridTemplate
  private CalculatorScore: ICalculator

  constructor(gt: GridTemplate, calc: ICalculator) {
    this.Cells = []
    this.Template = gt
    this.CalculatorScore = calc
  }

  public addCell(id: number, value: number): void {

    if (this.findCellById(id) == null) {
      this.Cells.push(new Cell(id, value))
    }
  }

  //find a cell by its id

  public findCellById(id: number): Cell | undefined {
    for (const cell of this.Cells) {
      if (cell.getId() == id) {
        return cell;
      }
    }
    return undefined;
  }

  public getAdjacentCells(id: number): number[] {
    const adjacentIds = this.getTemplate().getGraph().get(id) ?? [];
    return adjacentIds;
  }

  public getCellValue(id: number): number {
    return this.findCellById(id).getValue();
  }

  public getCells(): Cell[] {
    return this.Cells
  }


  public getTemplate(): GridTemplate {
    return this.Template
  }

  public getCalculatorScore(): ICalculator{
    return this.CalculatorScore
  }

}

export default Grid