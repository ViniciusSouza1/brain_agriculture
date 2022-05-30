import { IFarmRepository } from "../../../repositories/IFarmRepository";

export interface ICreateFarmRequest {
    id_farm_producer: string,
    name: string,
    city: string,
    state: string,
    total_acres: number,
    vegetable_acres: number,
    agriculture_acres: number,
}

class CreateFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute(data: ICreateFarmRequest, token: string) {

        const validatingProperties = this.farmRepository.verifyAllProperties(data);
        
        if(!validatingProperties){
            throw new Error('Todas as propriedades são obrigatórias')
        }

        const validatingSize = this.farmRepository.verifyFarmSize(data.total_acres, data.vegetable_acres, data.agriculture_acres)

        if(!validatingSize) throw new Error('O tamanho das áreas vegetáveis e de agricultura não podem ser maiores que a área total')

        const createFarm = await this.farmRepository.createFarm(data);

        return createFarm;
    }

}

export { CreateFarmService }