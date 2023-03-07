import Cell from "./Cell";
import GridTemplate from "./GridTemplate";

class ClassicTemplate extends GridTemplate{
    constructor(){
        super()
        var graph: Map<number, Array<number>> = new Map<number,Array<number>>()

        graph.set(1,[2])
        graph.set(2,[1,3])
        graph.set(3,[2,4,6,7])
        graph.set(4,[3,5,6])
        graph.set(5,[4,6,9])
        graph.set(6,[3,4,5,7,8,9])
        graph.set(7,[3,6,8,10])
        graph.set(8,[6,7,9,10,12,13])
        graph.set(9,[5,6,8,13])
        graph.set(10,[7,8,11,12])
        graph.set(11,[10])
        graph.set(12,[8,10,13,14,15])
        graph.set(13,[8,9,12,14])
        graph.set(14,[12,13,15])
        graph.set(15,[12,14,16,17])
        graph.set(16,[15,17,18])
        graph.set(17,[15,16,18])
        graph.set(18,[16,17,19])
        graph.set(19,[18])

        this.setGraph(graph)
    }
}
export default ClassicTemplate