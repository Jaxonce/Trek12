class Stats{

    private Chains: number
    private Zones: number
    private MaxChainValue: number
    private MaxZoneValue: number
    private NbPlayed: number

    constructor(){
        this.Chains = 0
        this.Zones = 0
        this.MaxZoneValue = 0
        this.MaxChainValue = 0
        this.NbPlayed = 0
    }

    public getChains(): number{
        return this.Chains
    }

    public getZones(): number{
        return this.Zones
    }

    public getMaxChainValue(): number{
        return this.MaxChainValue
    }

    public getMaxZoneValue(): number{
        return this.MaxZoneValue
    }

    public getNbPlayed(): number{
        return this.NbPlayed
    }

    public setMaxChainValue(value: number): void{
        this.MaxChainValue = value
    }

    public setMaxZoneValue(value: number): void{
        this.MaxZoneValue = value
    }

    public incrementNbPlayed(): void{
        this.NbPlayed+=1
    }

    public incrementChains(): void{
        this.Chains+=1
    }

    public incrementZones(): void{
        this.Zones+=1
    }

}

export default Stats