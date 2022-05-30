import { NextFunction, Request, Response } from "express";
import { UpdateFarmService } from "./UpdateFarmService";

class UpdateFarmController {
    
    constructor(
        private createFarm: UpdateFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                id_farm_producer,
                name,
                city,
                state,
                total_acres,
                vegetable_acres,
                agriculture_acres
            } = req.body;

            const { id } = req.params;

            const userLogged = await this.createFarm.execute({
                id,
                id_farm_producer,
                name,
                city,
                state,
                total_acres,
                vegetable_acres,
                agriculture_acres
            });

            return res.status(200).json(userLogged);
        } catch (error) {
            next(error)
        }

    }
}

export { UpdateFarmController }