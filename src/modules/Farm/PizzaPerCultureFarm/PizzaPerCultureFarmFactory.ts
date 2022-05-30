import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { PizzaPerCultureFarmService } from "./PizzaPerCultureFarmService";
import { PizzaPerCultureFarmController } from "./PizzaPerCultureFarmController";
export const PizzaPerCultureFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new PizzaPerCultureFarmService(farmRepository)
    const createFarmController = new PizzaPerCultureFarmController(createFarm);

    return createFarmController;
}