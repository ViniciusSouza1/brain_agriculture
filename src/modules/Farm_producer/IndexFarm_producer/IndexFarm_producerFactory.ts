import { KnexFarm_producerRepository } from "../../../repositories/knex/KnexFarm_producerRepository";
import { IndexFarm_producerService } from "./IndexFarm_producerService";
import { IndexFarm_producerController } from "./IndexFarm_producerController";

export const IndexFarm_producerFactory = () => {
    const userRepository = new KnexFarm_producerRepository();
    const IndexFarm_producer = new IndexFarm_producerService(userRepository)
    const indexFarm_producerController = new IndexFarm_producerController(IndexFarm_producer);

    return indexFarm_producerController;
}