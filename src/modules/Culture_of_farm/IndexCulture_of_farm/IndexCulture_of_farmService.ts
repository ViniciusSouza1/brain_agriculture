require('dotenv').config

import { ICulture_of_farmRepository } from "../../../repositories/ICulture_of_farmRepository";


export interface IIndexCulture_of_farmRequest {
    id_farm_producer?: string
    name?: string;
    city?: string;
    state?: string;
    page?: number;
}

class IndexCulture_of_farmService {

    constructor(
        private culture_of_farmRepository: ICulture_of_farmRepository
    ) { }

    async execute(data: IIndexCulture_of_farmRequest) {

        const response = await this.culture_of_farmRepository.search(data);

        return response;
    }

}

export { IndexCulture_of_farmService }