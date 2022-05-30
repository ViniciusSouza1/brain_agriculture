export class Farm {
    public readonly id?: string;

    public id_farm_producer: string;
    
    public name: string;
    public city: string;
    public state: string;
    public total_acres: number;
    public vegetable_acres: number;
    public agriculture_acres: number;

    constructor(props: Omit<Farm, 'id'>, uid?: string) {
        Object.assign(this, props);
    }

}