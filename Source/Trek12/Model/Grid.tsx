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

  public getAdjacentCells(id: number): number[] {
    const adjacentIds = this.getTemplate().getGraph().get(id) ?? [];
    return adjacentIds;
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

  public CalculAndFindScoreZone(l: Array<number>): number {
    var listeVisited = [] // liste des cellules visitée
    var listeCellulesZone = [] // liste des cellules de la zone actuelle
    var zoneCells: Cell[] = [] //  cellules de la zone

    // si la liste donnée en param contient pas des id identiques, ça dégage parce que c'est pas une zone
    if (l.every((id, index, array) => id == array[0])) {
      return -1
    }

    //pour toutes les cellules demandées
    for (const cellId of l) {

      if (!listeVisited.includes(cellId)) {       // si la cellule n'est pas déjà visitée

        listeVisited.push(cellId) // la marque comme visitée
        for (const adj of this.getAdjacentCells(cellId)) { // pour chacune de ses cellules adjacentes

          if ((!listeCellulesZone.includes(adj)) && (l.includes(adj))) { // si elle est pas dans listeZone mais qu'elle est dans la liste donnée en param 

            listeCellulesZone.push(adj) // l'ajoute à la liste des cellules de la zone

            if (!listeCellulesZone.includes(cellId)) { // si la cellule de base ( pas l'adjacente ) est pas déjà dans la zone
              listeCellulesZone.push(cellId) // ajoute la cellule de base dans la zone
            }
          }

          else if (!l.includes(adj)) { // sinon si l'adjacent est pas dans la liste des param
            if (!listeVisited.includes(adj)) { // si elle est pas marquée visitée
              listeVisited.push(adj) // la marque comme visitée
            }
          }
        }

      }
    }

    // si les cellules de la zone sont toutes dans la liste en param et que la longueur des deux listes est la même
    // ( permet de vérifier que tout se soit bien passé comme il faut )
    if ((listeCellulesZone.every((element) => l.includes(element))) && l.length == listeCellulesZone.length) {

      //ajoute dans la liste des cellules de la zone ( pas la liste de leurs ids) les cellules
      for(const idCell of listeCellulesZone){
        zoneCells.push(this.findCellById(idCell))
      }

      /*
      for(const cell of zoneCells){ //pour toutes les cellules de la zone

        // si c'est déjà une zone return -1
        if((cell.getType()== Celltype.ZONE) || (cell.getType()==Celltype.BOTH)){
          return -1
        }

        if(cell.getType() == Celltype.CHAIN){ // si c'est déjà une chaîne set à BOTH
          cell.setType(Celltype.BOTH)
        }

        else{ // sinon set à ZONE
          cell.set
        }
      }
      */
     //méthode pas finie pour le moment, faut régler le pb de l'appartenance aux zones
     return 69
    }
  }

  public getCells(): Cell[] {
    return this.Cells
  }


  public getTemplate(): GridTemplate {
    return this.Template
  }
}

export default Grid