import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { PizzaPerStateFarmService } from "./PizzaPerStateFarmService";
import { PizzaPerStateFarmController } from "./PizzaPerStateFarmController";
export const PizzaPerStateFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new PizzaPerStateFarmService(farmRepository)
    const createFarmController = new PizzaPerStateFarmController(createFarm);

    return createFarmController;
}