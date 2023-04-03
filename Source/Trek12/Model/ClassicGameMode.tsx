import CalculatorClassic from "./CalculatorClassic";
import ClassicOperationManager from "./ClassicOperationManager";
import ClassicTemplate from "./ClassicTemplate";
import Game from "./Game";
import GameFactory from "./GameFactory";

class ClassicGameFactory extends GameFactory{
    public intitialize(om: ClassicOperationManager, gt: ClassicTemplate, maxTurns : number, calc: CalculatorClassic): Game{
        return new Game(gt, om, maxTurns, calc)
    }
}

export default ClassicGameFactory