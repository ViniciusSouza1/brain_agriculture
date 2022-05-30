import { NextFunction, Request, Response } from "express";
import { IIndexCulture_of_farmRequest, IndexCulture_of_farmService } from "./IndexCulture_of_farmService";

class IndexCulture_of_farmController {

    constructor(
        private IndexCulture_of_farm: IndexCulture_of_farmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {

            const {
                page,
                id_farm,
                id_culture
            } = <any>req.query;

            const farm = <any>await this.IndexCulture_of_farm.execute({
                page,
                id_farm,
                id_culture
            });

            return res.status(200).json(farm);
        } catch (error) {
            next(error)
        }

    }
}

export { IndexCulture_of_farmController }