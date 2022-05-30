import { NextFunction, Request, Response } from "express";
import { UpdateFarm_producerService } from "./UpdateFarm_producerService";

class UpdateFarm_producerController {
    
    constructor(
        private createFarm_producer: UpdateFarm_producerService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                cpf_cnpj,
                email,
                password,
                name,
                last_name,
                city,
                state
            } = req.body;

            const { id } = req.params;

            const update_farm = await this.createFarm_producer.execute({
                id,
                cpf_cnpj,
                email,
                password,
                name,
                last_name,
                city,
                state
            });

            return res.status(200).json(update_farm);
        } catch (error) {
            next(error)
        }

    }
}

export { UpdateFarm_producerController }