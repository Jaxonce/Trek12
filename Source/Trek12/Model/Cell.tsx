import Celltype from './Celltype';

class Cell{

    private x: number
    private y: number
    private value: number
    private type: Celltype

    constructor( x: number, y: number , value: number, type: Celltype = Celltype.UNKNOWN){
        this.x = x
        this.y = y
        this.value = value
        this.type = type
    }

    public setCoordonates(x: number, y: number): void{
        this.x = x
        this.y = y
    }

    public setValue(v: number): void{
        this.value = v
    }

    public setType(t: Celltype): void{
        this.type=t
    }

    public getX(): number{
        return this.x
    }

    public getY(): number{
        return this.y
    }

    public getValue(): number{
        return this.value
    }

    public getType(): Celltype{
        return this.type
    }
}

export default Cell;
