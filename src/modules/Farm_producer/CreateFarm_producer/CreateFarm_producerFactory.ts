import { KnexFarm_producerRepository } from "../../../repositories/knex/KnexFarm_producerRepository";
import { KnexAuthRepository } from "../../../repositories/knex/KnexAuthRepository";
import { CreateFarm_producerService } from "./CreateFarm_producerService";
import { CreateFarm_producerController } from "./CreateFarm_producerController";
export const CreateFarm_producerFactory = () => {
    const farm_producerRepository = new KnexFarm_producerRepository();
    const authRepository = new KnexAuthRepository()
    const createFarm_producer = new CreateFarm_producerService(farm_producerRepository, authRepository)
    const createFarm_producerController = new CreateFarm_producerController(createFarm_producer);

    return createFarm_producerController;
}