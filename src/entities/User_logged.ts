export class User_info{
    public id: string;

    public name: string;
    public last_name: string;
    public email: string;

    constructor(props: User_info) {
        Object.assign(this, props);
    }
}

export class User_logged {
    public user: User_info;
    public token: string;

    constructor(props: User_logged) {
        Object.assign(this, props);
    }

}
