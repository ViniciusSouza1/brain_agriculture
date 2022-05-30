import { NextFunction, Request, Response } from "express";
import { TotalOfAcresFarmService } from "./TotalOfAcresFarmService";

class TotalOfAcresFarmController {

    constructor(
        private totalOfAcresFarm: TotalOfAcresFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
    
            const total_of_farm = await this.totalOfAcresFarm.execute();

            return res.status(200).json(total_of_farm);
        } catch (error) {
            next(error)
        }
    }
}

export { TotalOfAcresFarmController }