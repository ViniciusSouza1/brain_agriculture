import { NextFunction, Request, Response } from "express";
import { CreateFarmService } from "./CreateFarmService";

class CreateFarmController {

    constructor(
        private createFarm: CreateFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {
             
                name,
                city,
                state,
                total_acres,
                vegetable_acres,
                agriculture_acres,
                id_farm_producer
            } = req.body;


            const userLogged = await this.createFarm.execute({
                id_farm_producer,
                name,
                city,
                state,
                total_acres,
                vegetable_acres,
                agriculture_acres,
            }, req.headers['authorization']);

            return res.status(201).json(userLogged);
        } catch (error) {
            next(error)
        }

    }
}

export { CreateFarmController }