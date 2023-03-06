import Operation from "./Operation";

abstract class OperationManager {
  private operationDict: Map<Operation, number>;
  private calculDict: Map<Operation, (a: number, b: number) => number>;

  public getOperationDict(): Map<Operation, number> {
    return this.operationDict;
  }

  public setOperationDict(map : Map<Operation, number>) {
    this.operationDict = map
  }

  public getCalculDict(): Map<Operation, (a: number, b: number) => number> {
    return this.calculDict;
  }

  public setCalculDict(value: Map<Operation, (a: number, b: number) => number>) {
    this.calculDict = value;
  }
}

export default OperationManager