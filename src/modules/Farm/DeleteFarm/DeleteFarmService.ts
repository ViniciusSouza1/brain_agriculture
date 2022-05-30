import { IFarmRepository } from "../../../repositories/IFarmRepository";


export interface IDeleteFarmRequest {
    id: string;
}

class DeleteFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute(data: IDeleteFarmRequest) {
        const response = await this.farmRepository.delete(data.id);
        
        return response;
    }

}

export { DeleteFarmService }