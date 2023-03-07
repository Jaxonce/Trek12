import GridTemplate from "./GridTemplate";

abstract class GameMode{
    private template: GridTemplate

    abstract initialize(): void

    public getTemplate(): GridTemplate{
        return this.template
    }

    public setTemplate(g: GridTemplate){
        this.template = g
    }

}

export default GameMode