import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { TotalOfFarmService } from "./TotalOfFarmService";
import { TotalOfFarmController } from "./TotalOfFarmController";
export const TotalOfFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new TotalOfFarmService(farmRepository)
    const createFarmController = new TotalOfFarmController(createFarm);

    return createFarmController;
}