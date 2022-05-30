import { IFarm_producerRepository } from "../../../repositories/IFarm_producerRepository";


export interface IDeleteFarm_producerRequest {
    id: string;
}

class DeleteFarm_producerService {

    constructor(
        private farm_producerRepository: IFarm_producerRepository,
    ) { }

    async execute(data: IDeleteFarm_producerRequest) {
        const response = await this.farm_producerRepository.delete(data.id);
        
        return response;
    }

}

export { DeleteFarm_producerService }