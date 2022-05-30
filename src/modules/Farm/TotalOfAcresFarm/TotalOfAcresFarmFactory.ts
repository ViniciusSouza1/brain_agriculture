import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { TotalOfAcresFarmService } from "./TotalOfAcresFarmService";
import { TotalOfAcresFarmController } from "./TotalOfAcresFarmController";
export const TotalOfAcresFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new TotalOfAcresFarmService(farmRepository)
    const createFarmController = new TotalOfAcresFarmController(createFarm);

    return createFarmController;
}