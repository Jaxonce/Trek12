import Stats from "./Stats"

class Player{

    private Id: number
    private Name: String
    private Stats: Stats

    constructor(id: number, name: string, stats: Stats){
        this.Id = id
        this.Name = name
        this.Stats = stats
    }

    public getId(): number{
        return this.Id
    }

    public getName(): String{
        return this.Name
    }

    public getStats(): Stats{
        return this.Stats
    }

    public setId(value: number): void{
        this.Id = value
    }

    public setName(value: String): void{
        this.Name = value
    }
}

export default Player