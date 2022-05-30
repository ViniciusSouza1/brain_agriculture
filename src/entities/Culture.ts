export class Culture {
    public readonly id?: string;

    public name: string;

    constructor(props: Omit<Culture, 'id'>, uid?: string) {
        Object.assign(this, props);
    }

}