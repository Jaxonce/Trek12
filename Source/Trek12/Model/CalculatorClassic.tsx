import ICalculator from "./ICalculator";
import Cell from "./Cell";
import Grid from "./Grid";
import GridTemplate from "./GridTemplate";
import Celltype from "./Celltype";

class CalculatorClassic implements ICalculator {
    Template: GridTemplate

    constructor(template: GridTemplate) {
        this.Template = template
    }
    public CalculAndFindScoreChaine(listedid: Array<number>, grid: Grid): number { //1ere liste : id des cellules de la zone, 2eme liste : id des cellules de la chaine
        const cells = [];
        const template = this.Template.getGraph();
        const valueChaineTrie = [];
        for (const cell of listedid) {
            valueChaineTrie.push(grid.getCellValue(cell));
            cells.push(grid.findCellById(cell));
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
    public CalculAndFindScoreZone(l: Array<number>, grid: Grid): number {
        var listeVisited = [] // liste des cellules visitée
        var listeCellulesZone = [] // liste des cellules de la zone actuelle
        var zoneCells: Cell[] = [] //  cellules de la zone
        var celltypes: Celltype[] = []

        // si la liste donnée en param contient des id identiques, ça dégage parce que c'est pas une zone
        if (l.every((id, index, array) => id == array[0])) {
            return -1
        }

        //pour toutes les cellules demandées
        for (const cellId of l) {

            if (!listeVisited.includes(cellId)) {       // si la cellule n'est pas déjà visitée

                listeVisited.push(cellId) // la marque comme visitée
                for (const adj of grid.getAdjacentCells(cellId)) { // pour chacune de ses cellules adjacentes

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
            for (const idCell of listeCellulesZone) {
                zoneCells.push(grid.findCellById(idCell))
            }

            // récupère le type de chaque cellule de la zone
            for (const cell of zoneCells) {
                celltypes.push(cell.getType())
            }

            // si y'en a à zone ou both return -1
            if (celltypes.includes(Celltype.ZONE) || celltypes.includes(Celltype.BOTH)) {
                return -1
            }

            for (const cell of zoneCells) { //pour toutes les cellules de la zone

                if (cell.getType() == Celltype.CHAIN) { // si c'est déjà une chaîne set à BOTH
                    cell.setType(Celltype.BOTH)
                }

                else { // sinon set à ZONE
                    cell.setType(Celltype.ZONE)
                }
            }

            //return le score
            return zoneCells[0].getValue() + zoneCells.length - 1
        }
        else {
            return -1
        }
    }
}

export default CalculatorClassic