abstract class GridTemplate{
    private graph: Map<number, Array<number>>


    public getGraph(): Map<number, Array<number>>{
        return this.graph
    }

    public setGraph(map: Map<number, Array<number>>){
        this.graph = map
    }
}

export default GridTemplate