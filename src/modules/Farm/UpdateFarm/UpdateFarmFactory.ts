import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { UpdateFarmService } from "./UpdateFarmService";
import { UpdateFarmController } from "./UpdateFarmController";
export const updateFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const updateFarm = new UpdateFarmService(farmRepository)
    const updateFarmController = new UpdateFarmController(updateFarm);

    return updateFarmController;
}