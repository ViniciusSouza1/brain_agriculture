require('dotenv').config

import { IUserRepository } from "../../../repositories/IUserRepository";


export interface IIndexUserRequest {
    page: number
    username?: string;
    email?: string;
    name?: string;
    last_name?: string;
}

class IndexUserService {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(data: IIndexUserRequest) {

        const response = await this.userRepository.search(data);

        return response;
    }

}

export { IndexUserService }