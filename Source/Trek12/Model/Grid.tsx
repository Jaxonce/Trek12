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

  public CountZones(): Array<[number, number]> {
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
      if (
        cell.getType() === Celltype.UNKNOWN &&
        !visitedZones.includes(cell.getValue())
      ) {
        // Démarre une nouvelle zone avec cette cellule
        zone = [cell.getId()];
        visitedZones.push(cell.getValue());
        if (template.get(cell.getId()) != undefined) {
          // Parcourt toutes les cellules adjacentes à cette cellule
          for (const adjacentCellId of template.get(cell.getId())) {
            const adjacentCell = this.findCellById(adjacentCellId);
            if (adjacentCell !== undefined) {
              // Si la cellule adjacente a le même numéro et est inconnue
              if (
                adjacentCell &&
                adjacentCell != null &&
                adjacentCell.getValue() === cell.getValue() &&
                adjacentCell.getType() === Celltype.UNKNOWN
              ) {
                // Ajoute la cellule à la zone
                zone.push(adjacentCell.getId());
              }
            }
          }
        }

        // Si la zone a au moins 2 cellules, l'ajoute au tableau de zones
        if (zone.length >= 2) {
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
    }

    // Tableau pour stocker le nombre de cellules dans chaque zone
    const zoneSizes: Array<[number, number]> = [];

    // Parcourt toutes les zones et détermine la taille de chaque zone
    for (const z of zones) {
      zoneSizes.push([cells[z[0]].getValue(), z.length]);
    }

    return zoneSizes;
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





  // public CountChains(): Array<[number, number]>{
  //   const cells = this.Cells;
  //   const template = this.Template.getGraph();
  //   const chains: Array<Array<number>> = [];
  //   let actualChain = Array<number>()
  //   let actualChainSize = 0


  //   for( const cell of cells ){ // pour toutes les cases

  //     // Si la cellule est inconnue et n'a pas été visitée
  //     if (
  //       cell.getType() === Celltype.UNKNOWN &&
  //       !visitedZones.includes(cell.getValue())
  //     ) {
  //       // Démarre une nouvelle zone avec cette cellule
  //       zone = [cell.getId()];
  //       visitedZones.push(cell.getValue());

  //     if(!cell.isEmpty()){  // si elle est pas vide
  //       actualChain.push(cell.getId()) // la met dans la liste des valeurs de la chaîne actuelle
  //       for(const adjacent of template.get(cell.getId())){ // pour toutes les cases adjacentes a la case cell.getId()
  //         if((adjacent == cell.getId()+1 || adjacent== cell.getId()-1) && (!actualChain.includes(adjacent))  ){ // si la case adjacente est à coté de la case cell.getId() et qu'elle n'est pas déjà dans la liste des valeurs de la chaîne actuelle
  //           actualChain.push(adjacent) // la met dans la liste des valeurs de la chaîne actuelle
  //         }
  //       }
  //     }
  //   }
  // }

  // public findZonesAndCords(graph: Map<number, Array<number>>, cells: Array<number>) {
  //   const visitedCells: Set<number> = new Set();
  //   const zones: Array<Array<number>> = [];
  //   const cords: Array<Array<number>> = [];

  //   cells.forEach((cell) => {
  //     if (visitedCells.has(cell)) {
  //       return;
  //     }

  //     visitedCells.add(cell);

  //     const cellValue = this.getCellValue(cell);

  //     if (cellValue === 0) {
  //       const zone = [cell];
  //       const cellsToVisit = [cell];

  //       while (cellsToVisit.length > 0) {
  //         const currentCell = cellsToVisit.shift()!;
  //         const currentCellValue = this.getCellValue(currentCell);

  //         visitedCells.add(currentCell);

  //         if (currentCellValue === 1) {
  //           const cord = [currentCell];
  //           const cellsToVisitForCord = [currentCell];

  //           while (cellsToVisitForCord.length > 0) {
  //             const currentCordCell = cellsToVisitForCord.shift()!;
  //             const currentCordCellValue = this.getCellValue(currentCordCell);

  //             visitedCells.add(currentCordCell);

  //             if (currentCordCellValue > currentCellValue) {
  //               cord.push(currentCordCell);
  //             }

  //             const adjacentCells = graph.get(currentCordCell)!;

  //             adjacentCells.forEach((adjacentCell) => {
  //               if (visitedCells.has(adjacentCell)) {
  //                 return;
  //               }

  //               const adjacentCellValue = this.getCellValue(adjacentCell);

  //               if (adjacentCellValue === currentCordCellValue + 1) {
  //                 cellsToVisitForCord.push(adjacentCell);
  //               }
  //             });
  //           }

  //           cords.push(cord);
  //         }

  //         const adjacentCells = graph.get(currentCell)!;

  //         adjacentCells.forEach((adjacentCell) => {
  //           if (visitedCells.has(adjacentCell)) {
  //             return;
  //           }

  //           const adjacentCellValue = this.getCellValue(adjacentCell);

  //           if (adjacentCellValue === currentCellValue) {
  //             zone.push(adjacentCell);
  //             cellsToVisit.push(adjacentCell);
  //           }
  //         });
  //       }

  //       zones.push(zone);
  //     }
  //   });

  //   const points = this.calculatePoints(zones, cords, visitedCells);

  //   return points;
  // }

  // public calculerPoints(): number {
  //   let points = 0;
  //   const visitedCells = new Set<number>();

  //   // Parcours du graphe
  //   for (let cell = 1; cell <= 19; cell++) {
  //     // Si la cellule a déjà été visitée, on passe à la suivante
  //     if (visitedCells.has(cell)) continue;

  //     const cellValue = this.getCellValue(cell);

  //     // Si la cellule est vide (0), on recherche les zones adjacentes
  //     if (cellValue === 0) {
  //       const zone = this.dfsZone(cell, visitedCells);
  //       const zoneSize = zone.length;

  //       // Calcul des points pour la zone
  //       points += zoneSize + 1;
  //     }

  //     // Si la cellule est pleine (entre 1 et 12), on recherche les chemins de corde adjacents
  //     else {
  //       const cords = this.dfsCords(cell, visitedCells);
  //       const longestCord = Math.max(...cords);
  //       const cordSize = cords.length;

  //       // Calcul des points pour le chemin de corde
  //       points += longestCord + 1;
  //     }
  //   }

  //   return points;
  // }

  // public dfsZone(cell: number, visited: Set<number>): number {
  //   if (visited.has(cell)) {
  //     return 0;
  //   }
  //   visited.add(cell);
  //   let sum = this.getCellValue(cell) + 1;
  //   const neighbors = graph.get(cell) || [];
  //   for (const neighbor of neighbors) {
  //     if (this.getCellValue(neighbor) === this.getCellValue(cell)) {
  //       sum += this.dfsZone(neighbor, visited);
  //     }
  //   }
  //   return sum;
  // }




  public getCells(): Cell[] {
    return this.Cells
  }


  public getTemplate(): GridTemplate {
    return this.Template
  }
}

export default Grid