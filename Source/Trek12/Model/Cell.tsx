import Celltype from './Celltype';

class Cell{

    private id: number
    private value: number
    private type: Celltype

    constructor(id: number, type: Celltype = Celltype.UNKNOWN){
        this.id = id
        this.value = 0
        this.type = type
    }

    public setValue(v: number): void{
        this.value = v
    }

    public setType(t: Celltype): void{
        this.type=t
    }

    public getValue(): number{
        return this.value
    }

    public getType(): Celltype{
        return this.type
    }

    public getId(): number{
        return this.id
    }

    public isEmpty(): boolean{
        if(this.getValue()==0){
            return true
        }
        return false
    }
}

export default Cell;
