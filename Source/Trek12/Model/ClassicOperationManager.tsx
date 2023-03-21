import OperationManager from "./OperationManager";
import Operation from "./Operation";
 

class ClassicOperationManager extends OperationManager {

    constructor(){
        super()
        const mapOperation = new Map<Operation, number>();
        mapOperation.set(Operation.PLUS, 5)
        mapOperation.set(Operation.MINUS, 5)
        mapOperation.set(Operation.MAXVALUE, 5)
        mapOperation.set(Operation.MINVALUE, 5)
        mapOperation.set(Operation.MULTIPLY, 5)

        this.setOperationDict(mapOperation)

        const mapOperationFunc = new Map<Operation, (a: number, b: number) => number>()
        const plus = (a: number, b:number) => a + b
        const minus = (a: number, b:number) => Math.max(a,b) - Math.min(a,b)
        const multiply = (a:number, b:number) => a*b 
        const max = (a:number, b:number) => Math.max(a,b)
        const min = (a:number, b:number) => Math.min(a,b)

        mapOperationFunc.set(Operation.PLUS, plus)
        mapOperationFunc.set(Operation.MINUS, minus)
        mapOperationFunc.set(Operation.MULTIPLY, multiply)
        mapOperationFunc.set(Operation.MINVALUE, min)
        mapOperationFunc.set(Operation.MAXVALUE, max)

        this.setCalculDict(mapOperationFunc)
    }
}

export default ClassicOperationManager