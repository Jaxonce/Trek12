import Cell from "./Cell";
import Celltype from "./Celltype";
import GridTemplate from "./GridTemplate";

class Grid{

    private Cells: Cell[]
    private Template: GridTemplate

    constructor(gt: GridTemplate) {
        this.Cells = []
        this.Template = gt
    }

    public addCell(id: number, value: number): void{

        if(this.findCellById(id)==null){
            this.Cells.push(new Cell(id,value))
        }
    }


    public findCellById(id: number): Cell {
        for (const cell of this.Cells) {
          if (cell.getId() == id) {
            return cell;
          }
        }
        return null
    }

    public CountZones(): Array<[number, number]>{
        const cells = this.Cells;
        const template = this.Template.getGraph();
        const zones: Array<Array<number>> = [];
      
        // Tableau pour stocker les cellules appartenant à une zone
        let zone: Array<number> = [];
      
        // Tableau pour stocker les numéros de zone déjà visités
        let visitedZones: Array<number> = [];
      
        // Parcourt toutes les cellules
        for (const cell of cells) {
          // Si la cellule est inconnue et n'a pas été visitée
          if (cell.getType() === Celltype.UNKNOWN && !visitedZones.includes(cell.getValue())) {
            // Démarre une nouvelle zone avec cette cellule
            zone = [cell.getId()];
            visitedZones.push(cell.getValue());
      
            // Parcourt toutes les cellules adjacentes à cette cellule
            for (const adjacentCellId of template.get(cell.getId())) {
              const adjacentCell = this.findCellById(adjacentCellId);
              // Si la cellule adjacente a le même numéro et est inconnue
              if (adjacentCell.getValue() === cell.getValue() && adjacentCell.getType() === Celltype.UNKNOWN) {
                // Ajoute la cellule à la zone
                zone.push(adjacentCell.getId());
              }
            }
      
            // Ajoute la zone au tableau de zones
            zones.push(zone);
      
            // Modifie le type de chaque cellule de la zone
            for (const zoneCellId of zone) {
              const zoneCell = this.findCellById(zoneCellId);
              // Si la cellule était inconnue, la change en zone
              if (zoneCell.getType() === Celltype.UNKNOWN) {
                zoneCell.setType(Celltype.ZONE);
              }
              // Si la cellule était une chaîne, la change en les deux (chaîne et zone)
              if (zoneCell.getType() === Celltype.CHAIN) {
                zoneCell.setType(Celltype.BOTH);
              }
            }
          }
        }
      
        // Tableau pour stocker le nombre de cellules dans chaque zone
        const zoneSizes: Array<[number, number]> = [];
      
        // Parcourt toutes les zones et détermine la taille de chaque zone
        for (const z of zones) {
          zoneSizes.push([cells[z[0]].getValue(), z.length]);
        }
      
        return zoneSizes;
      }
      


      public getCells(): Cell[]{
        return this.Cells
    }

    public getTemplate(): GridTemplate{
        return this.Template
    }
}

export default Grid