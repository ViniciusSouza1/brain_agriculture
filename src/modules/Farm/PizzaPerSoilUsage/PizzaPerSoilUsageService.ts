import { IFarmRepository } from "../../../repositories/IFarmRepository";


class PizzaPerSoilUsageService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute() {

        const response = await this.farmRepository.pizzaPerSoilUsage();

        return response;
    }

}

export { PizzaPerSoilUsageService }