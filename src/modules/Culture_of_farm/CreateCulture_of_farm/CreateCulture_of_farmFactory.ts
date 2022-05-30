import { KnexCulture_of_farmRepository } from "../../../repositories/knex/KnexCulture_of_farmRepository";
import { CreateCulture_of_farmService } from "./CreateCulture_of_farmService";
import { CreateCulture_of_farmController } from "./CreateCulture_of_farmController";
export const CreateCulture_of_farmFactory = () => {
    const culture_of_farmRepository = new KnexCulture_of_farmRepository();
    const createCulture_of_farm = new CreateCulture_of_farmService(culture_of_farmRepository)
    const createCulture_of_farmController = new CreateCulture_of_farmController(createCulture_of_farm);

    return createCulture_of_farmController;
}