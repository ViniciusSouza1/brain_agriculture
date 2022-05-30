export class Culture_of_farm {
    public readonly id?: string;

    public id_farm: string;
    public id_culture: string;
    public acres_farm: number;

    constructor(props: Omit<Culture_of_farm, 'id'>, uid?: string) {
        Object.assign(this, props);
    }

}