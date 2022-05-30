import { IFarmRepository } from "../../../repositories/IFarmRepository";

export interface IUpdateFarmRequest {
    id: string,
    id_farm_producer: string,
    name: string,
    city: string,
    state: string,
    total_acres: number,
    vegetable_acres: number,
    agriculture_acres: number,
}

class UpdateFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute(data: IUpdateFarmRequest) {

        if (data.agriculture_acres || data.total_acres || data.vegetable_acres) {
            const validatingSize = this.farmRepository.verifyFarmSize(data.total_acres, data.vegetable_acres, data.agriculture_acres)
            if (!validatingSize) throw new Error('O tamanho das áreas vegetáveis e de agricultura não podem ser maiores que a área total')
        }

        const updatedFarm = await this.farmRepository.updateFarm(data);

        return updatedFarm;
    }

}

export { UpdateFarmService }