import ClassicOperationManager from "./ClassicOperationManager";
import ClassicTemplate from "./ClassicTemplate";
import Game from "./Game";
import GameFactory from "./GameFactory";

class ClassicGameFactory extends GameFactory{
    public intitialize(om: ClassicOperationManager, gt: ClassicTemplate, maxTurns : number): Game{
        return new Game(gt, om, maxTurns)
    }
}

export default ClassicGameFactory