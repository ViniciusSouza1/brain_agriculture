import { KnexFarm_producerRepository } from "../../../repositories/knex/KnexFarm_producerRepository";
import { DeleteFarm_producerService } from "./DeleteFarm_producerService";
import { DeleteFarm_producerController } from "./DeleteFarm_producerController";

export const deleteFarm_producerFactory = () => {
    const adminRepository = new KnexFarm_producerRepository();
    const deleteFarm_producer = new DeleteFarm_producerService(adminRepository);
    const deleteFarm_producerController = new DeleteFarm_producerController(deleteFarm_producer);

    return deleteFarm_producerController;
}