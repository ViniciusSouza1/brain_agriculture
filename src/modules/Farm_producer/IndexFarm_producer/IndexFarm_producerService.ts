require('dotenv').config

import { IFarm_producerRepository } from "../../../repositories/IFarm_producerRepository";


export interface IIndexFarm_producerRequest {
    page: number
    cpf_cnpj?: string;
    email?: string;
    phone?: string;
}

class IndexFarm_producerService {

    constructor(
        private userRepository: IFarm_producerRepository
    ) { }

    async execute(data: IIndexFarm_producerRequest) {

        const response = await this.userRepository.search(data);

        return response;
    }

}

export { IndexFarm_producerService }