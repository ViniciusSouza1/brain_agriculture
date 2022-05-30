import { KnexCulture_of_farmRepository } from "../../../repositories/knex/KnexCulture_of_farmRepository";
import { UpdateCulture_of_farmService } from "./UpdateCulture_of_farmService";
import { UpdateCulture_of_farmController } from "./UpdateCulture_of_farmController";
export const updateCulture_of_farmFactory = () => {
    const farmRepository = new KnexCulture_of_farmRepository();
    const updateCulture_of_farm = new UpdateCulture_of_farmService(farmRepository)
    const updateCulture_of_farmController = new UpdateCulture_of_farmController(updateCulture_of_farm);

    return updateCulture_of_farmController;
}