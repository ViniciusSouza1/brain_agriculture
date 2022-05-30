import { ICulture_of_farmRepository } from "../../../repositories/ICulture_of_farmRepository";

export interface IUpdateCulture_of_farmRequest {
    id: string
    id_farm: string;
    id_culture: string;
    acres_farm: number;
}

class UpdateCulture_of_farmService {

    constructor(
        private culture_of_farmRepository: ICulture_of_farmRepository,
    ) { }

    async execute(data: IUpdateCulture_of_farmRequest) {

        const validatingProperties = this.culture_of_farmRepository.verifyAllProperties(data);
        
        if(!validatingProperties){
            throw new Error('Todas as propriedades são obrigatórias')
        }

        await this.culture_of_farmRepository.verifyCulture_of_farmSize(data);


        const updatedCulture_of_farm = await this.culture_of_farmRepository.updateCulture_of_farm(data);

        return updatedCulture_of_farm;
    }

}

export { UpdateCulture_of_farmService }