import Cell from "./Cell";
import Celltype from "./Celltype";
import GridTemplate from "./GridTemplate";

class Grid {

  private Cells: Cell[]
  private Template: GridTemplate

  constructor(gt: GridTemplate) {
    this.Cells = []
    this.Template = gt
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

  public getCellValue(id: number): number {
    return this.findCellById(id).getValue();
  }

  public CalculAndFindScoreChaine(listedid: Array<number>): number { //1ere liste : id des cellules de la zone, 2eme liste : id des cellules de la chaine
    const cells = [];
    const template = this.Template.getGraph();
    const valueChaineTrie = [];
    for (const cell of listedid) {
      valueChaineTrie.push(this.getCellValue(cell));
      cells.push(this.findCellById(cell));
    }
    valueChaineTrie.sort();
    for (let i = 1; i < valueChaineTrie.length; i++) {
      if (!(valueChaineTrie[i] == valueChaineTrie[i - 1] + 1) || !(listedid[i] in template.get(listedid[i - 1]))) {
        return -1;
      }
    }
    for (const cell of cells) {
      if (cell.getType() == Celltype.CHAIN || cell.getType() == Celltype.BOTH) {
        return -1;
      }
    }
    for (const cell of cells) {
      if (cell.getType() == Celltype.ZONE) {
        cell.setType(Celltype.BOTH);
      } else if (cell.getType() == Celltype.UNKNOWN) {
        cell.setType(Celltype.CHAIN);
      }
    }
    return Math.max(...valueChaineTrie) + (valueChaineTrie.length - 1);
  }

  public CalculAndFindScoreZone(listeId: Array<number>): number {
    const cells = [];
    const template = this.Template.getGraph();
    const valueZone = [];
    for (const cell of listeId) {
      valueZone.push(this.getCellValue(cell));
      cells.push(this.findCellById(cell));
    }
    for (let i = 1; i < valueZone.length; i++) {
      if (!(valueZone[i] == valueZone[i - 1]) || !(listeId[i] in template.get(listeId[i - 1]))) {
        return -1;
      }
    }
    for (const cell of cells) {
      if (cell.getType() == Celltype.ZONE || cell.getType() == Celltype.BOTH) {
        return -1;
      }
    }
    for (const cell of cells) {
      if (cell.getType() == Celltype.CHAIN) {
        cell.setType(Celltype.BOTH);
      } else if (cell.getType() == Celltype.UNKNOWN) {
        cell.setType(Celltype.ZONE);
      }
    }
    return valueZone[0] + (valueZone.length - 1);
  }

  public getCells(): Cell[] {
    return this.Cells
  }


  public getTemplate(): GridTemplate {
    return this.Template
  }
}

export default Grid