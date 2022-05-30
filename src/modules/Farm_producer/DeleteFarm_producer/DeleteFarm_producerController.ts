import { NextFunction, Request, Response } from "express";
import { DeleteFarm_producerService } from "./DeleteFarm_producerService";

class DeleteFarm_producerController {
    constructor(
        private deleteFarm_producer: DeleteFarm_producerService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {


            const {
                id
            } = <any>req.params;

            const company = await this.deleteFarm_producer.execute({
                id
            });

            return res.status(200).json(company);
        } catch (error) {
            next(error)
        }
    }
}

export { DeleteFarm_producerController }