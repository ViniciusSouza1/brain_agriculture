export class Farm_producer {
    public readonly id?: string;

    public cpf_cnpj: string;
    public password: string;
    public name: string;
    public last_name: string;
    public city: string;
    public state: string;

    constructor(props: Omit<Farm_producer, 'id'>, uid?: string) {
        Object.assign(this, props);
    }

}