import { IFarmRepository } from "../../../repositories/IFarmRepository";


class TotalOfFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute() {

        const response = await this.farmRepository.totalOfFarm();

        return response;
    }

}

export { TotalOfFarmService }