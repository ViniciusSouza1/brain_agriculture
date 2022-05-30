import { KnexCulture_of_farmRepository } from "../../../repositories/knex/KnexCulture_of_farmRepository";
import { IndexCulture_of_farmService } from "./IndexCulture_of_farmService";
import { IndexCulture_of_farmController } from "./IndexCulture_of_farmController";

export const IndexCulture_of_farmFactory = () => {
    const culture_of_farmRepository = new KnexCulture_of_farmRepository();
    const IndexCulture_of_farm = new IndexCulture_of_farmService(culture_of_farmRepository)
    const indexCulture_of_farmController = new IndexCulture_of_farmController(IndexCulture_of_farm);

    return indexCulture_of_farmController;
}