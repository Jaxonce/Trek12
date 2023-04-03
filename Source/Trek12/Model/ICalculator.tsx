import Grid from "./Grid";

interface ICalculator{

    CalculAndFindScoreChaine(listedid: Array<number>, grid: Grid): number;
    CalculAndFindScoreZone(listedid: Array<number>, grid: Grid): number;

}

export default ICalculator