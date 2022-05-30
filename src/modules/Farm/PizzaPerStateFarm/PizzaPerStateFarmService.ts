import { IFarmRepository } from "../../../repositories/IFarmRepository";


class PizzaPerStateFarmService {

    constructor(
        private farmRepository: IFarmRepository,
    ) { }

    async execute() {

        const response = await this.farmRepository.pizzaPerStateFarm();

        return response;
    }

}

export { PizzaPerStateFarmService }