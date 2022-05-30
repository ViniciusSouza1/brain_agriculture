import { IFarmRepository } from "../../../repositories/IFarmRepository";


class PizzaPerCultureFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute() {

        const response = await this.farmRepository.pizzaPerCultureFarm();

        return response;
    }

}

export { PizzaPerCultureFarmService }