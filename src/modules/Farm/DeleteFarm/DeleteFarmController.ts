import { NextFunction, Request, Response } from "express";
import { DeleteFarmService } from "./DeleteFarmService";

class DeleteFarmController {
    constructor(
        private deleteFarm: DeleteFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {


            const {
                id
            } = <any>req.params;

            const company = await this.deleteFarm.execute({
                id
            });

            return res.status(200).json(company);
        } catch (error) {
            next(error)
        }
    }
}

export { DeleteFarmController }