import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { DeleteFarmService } from "./DeleteFarmService";
import { DeleteFarmController } from "./DeleteFarmController";

export const deleteFarmFactory = () => {
    const adminRepository = new KnexFarmRepository();
    const deleteFarm = new DeleteFarmService(adminRepository);
    const deleteFarmController = new DeleteFarmController(deleteFarm);

    return deleteFarmController;
}