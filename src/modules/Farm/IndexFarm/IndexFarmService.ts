require('dotenv').config

import { IFarmRepository } from "../../../repositories/IFarmRepository";


export interface IIndexFarmRequest {
    id_farm_producer?: string
    name?: string;
    city?: string;
    state?: string;
    page?: number;
}

class IndexFarmService {

    constructor(
        private userRepository: IFarmRepository
    ) { }

    async execute(data: IIndexFarmRequest) {

        const response = await this.userRepository.search(data);

        return response;
    }

}

export { IndexFarmService }