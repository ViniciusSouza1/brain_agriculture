import { NextFunction, Request, Response } from "express";
import { IIndexFarmRequest, IndexFarmService } from "./IndexFarmService";

class IndexFarmController {

    constructor(
        private IndexFarm: IndexFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {

            const {
                id_farm_producer,
                name,
                city,
                state
            } = <any>req.query;

            const farm = <any>await this.IndexFarm.execute({
                id_farm_producer,
                name,
                city,
                state
            });

            return res.status(200).json(farm);
        } catch (error) {
            next(error)
        }

    }
}

export { IndexFarmController }