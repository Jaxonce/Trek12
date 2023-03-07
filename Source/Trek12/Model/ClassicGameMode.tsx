import ClassicTemplate from "./ClassicTemplate";
import GameMode from "./GameMode";

class ClassicGameMode extends GameMode{
    public initialize(): void{
        this.setTemplate(new ClassicTemplate)
    }
}

export default ClassicGameMode