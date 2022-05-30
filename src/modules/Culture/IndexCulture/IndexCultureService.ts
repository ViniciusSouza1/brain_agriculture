require('dotenv').config

import { ICultureRepository } from "../../../repositories/ICultureRepository";


export interface IIndexCultureRequest {
    page: number;
    name?: string;
}

class IndexCultureService {

    constructor(
        private cultureRepository: ICultureRepository
    ) { }

    async execute(data: IIndexCultureRequest) {

        const response = await this.cultureRepository.search(data);

        return response;
    }

}

export { IndexCultureService }