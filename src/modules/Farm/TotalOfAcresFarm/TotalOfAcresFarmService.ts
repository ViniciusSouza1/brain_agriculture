import { IFarmRepository } from "../../../repositories/IFarmRepository";


class TotalOfAcresFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute() {

        const response = await this.farmRepository.totalOfAcresFarm();

        return response;
    }

}

export { TotalOfAcresFarmService }