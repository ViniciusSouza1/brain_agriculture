import { KnexFarm_producerRepository } from "../../../repositories/knex/KnexFarm_producerRepository";
import { KnexAuthRepository } from "../../../repositories/knex/KnexAuthRepository";
import { UpdateFarm_producerService } from "./UpdateFarm_producerService";
import { UpdateFarm_producerController } from "./UpdateFarm_producerController";
export const UpdateFarm_producerFactory = () => {
    const farm_producerRepository = new KnexFarm_producerRepository();
    const authRepository = new KnexAuthRepository()
    const updateFarm_producer = new UpdateFarm_producerService(farm_producerRepository, authRepository)
    const updateFarm_producerController = new UpdateFarm_producerController(updateFarm_producer);

    return updateFarm_producerController;
}