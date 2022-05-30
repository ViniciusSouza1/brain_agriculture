import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { CreateFarmService } from "./CreateFarmService";
import { CreateFarmController } from "./CreateFarmController";
export const CreateFarmFactory = () => {
    const farmRepository = new KnexFarmRepository();
    const createFarm = new CreateFarmService(farmRepository)
    const createFarmController = new CreateFarmController(createFarm);

    return createFarmController;
}