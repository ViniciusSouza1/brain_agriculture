import { KnexCulture_of_farmRepository } from "../../../repositories/knex/KnexCulture_of_farmRepository";
import { DeleteCulture_of_farmService } from "./DeleteCulture_of_farmService";
import { DeleteCulture_of_farmController } from "./DeleteCulture_of_farmController";

export const deleteCulture_of_farmFactory = () => {
    const culture_of_farmRepository = new KnexCulture_of_farmRepository();
    const deleteCulture_of_farm = new DeleteCulture_of_farmService(culture_of_farmRepository);
    const deleteCulture_of_farmController = new DeleteCulture_of_farmController(deleteCulture_of_farm);

    return deleteCulture_of_farmController;
}