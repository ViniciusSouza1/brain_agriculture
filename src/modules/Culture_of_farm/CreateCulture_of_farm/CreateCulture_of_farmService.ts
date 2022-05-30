import { ICulture_of_farmRepository } from "../../../repositories/ICulture_of_farmRepository";

export interface ICreateCulture_of_farmRequest {
    id_farm: string;
    id_culture: string;
    acres_farm: number;
}

class CreateCulture_of_farmService {

    constructor(
        private culture_of_farmRepository: ICulture_of_farmRepository,
    ) { }

    async execute(data: ICreateCulture_of_farmRequest, token: string) {

        const validatingProperties = this.culture_of_farmRepository.verifyAllProperties(data);
        
        if(!validatingProperties){
            throw new Error('Todas as propriedades são obrigatórias')
        }

        await this.culture_of_farmRepository.verifyCulture_of_farmSize(data);

        const createCulture_of_farm = await this.culture_of_farmRepository.createCulture_of_farm(data);

        return createCulture_of_farm;
    }

}

export { CreateCulture_of_farmService }