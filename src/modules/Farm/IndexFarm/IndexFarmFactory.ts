import { KnexFarmRepository } from "../../../repositories/knex/KnexFarmRepository";
import { IndexFarmService } from "./IndexFarmService";
import { IndexFarmController } from "./IndexFarmController";

export const IndexFarmFactory = () => {
    const userRepository = new KnexFarmRepository();
    const IndexFarm = new IndexFarmService(userRepository)
    const indexFarmController = new IndexFarmController(IndexFarm);

    return indexFarmController;
}