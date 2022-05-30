import { KnexCultureRepository } from "../../../repositories/knex/KnexCultureRepository";
import { IndexCultureService } from "./IndexCultureService";
import { IndexCultureController } from "./IndexCultureController";

export const IndexCultureFactory = () => {
    const cultureRepository = new KnexCultureRepository();
    const IndexCulture = new IndexCultureService(cultureRepository)
    const indexCultureController = new IndexCultureController(IndexCulture);

    return indexCultureController;
}