import { NextFunction, Request, Response } from "express";
import { CreateFarm_producerService } from "./CreateFarm_producerService";

class CreateFarm_producerController {

    constructor(
        private createFarm_producer: CreateFarm_producerService
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

            const userLogged = await this.createFarm_producer.execute({
                cpf_cnpj,
                email,
                password,
                name,
                last_name,
                city,
                state
            });

            return res.status(201).json(userLogged);
        } catch (error) {
            next(error)
        }

    }
}

export { CreateFarm_producerController }