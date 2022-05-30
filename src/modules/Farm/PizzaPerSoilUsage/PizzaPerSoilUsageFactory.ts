import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { PizzaPerSoilUsageService } from "./PizzaPerSoilUsageService";
import { PizzaPerSoilUsageController } from "./PizzaPerSoilUsageController";
export const PizzaPerSoilUsageFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new PizzaPerSoilUsageService(farmRepository)
    const createFarmController = new PizzaPerSoilUsageController(createFarm);

    return createFarmController;
}