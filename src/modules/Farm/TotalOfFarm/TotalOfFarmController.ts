import { NextFunction, Request, Response } from "express";
import { TotalOfFarmService } from "./TotalOfFarmService";

class TotalOfFarmController {

    constructor(
        private totalOfFarm: TotalOfFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
    
            const total_of_farm = await this.totalOfFarm.execute();

            return res.status(200).json(total_of_farm);
        } catch (error) {
            next(error)
        }
    }
}

export { TotalOfFarmController }