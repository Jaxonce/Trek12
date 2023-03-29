import Game from "./Game";
import GridTemplate from "./GridTemplate";
import OperationManager from "./OperationManager";

abstract class GameFactory{

    public initialize(om: OperationManager, gt: GridTemplate, maxTurns : number): Game{
        return new Game(gt, om, maxTurns)
    }

}

export default GameFactory