import Game from "./Game";
import GridTemplate from "./GridTemplate";
import ICalculator from "./ICalculator";
import OperationManager from "./OperationManager";

abstract class GameFactory{

    public intitialize(om: OperationManager, gt: GridTemplate, maxTurns : number, calc: ICalculator): Game{
        return new Game(gt, om, maxTurns, calc)
    }

}

export default GameFactory