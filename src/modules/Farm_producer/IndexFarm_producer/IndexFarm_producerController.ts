import { NextFunction, Request, Response } from "express";
import { IIndexFarm_producerRequest, IndexFarm_producerService } from "./IndexFarm_producerService";

class IndexFarm_producerController {

    constructor(
        private IndexFarm_producer: IndexFarm_producerService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {

            const {
                cpf_cnpj,
                email,
                phone,
                page
            } = <any> req.query;

            const farm_producer = <any> await this.IndexFarm_producer.execute({
                cpf_cnpj,
                email,
                phone,
                page
            });

            return res.status(200).json(farm_producer);
        } catch (error) {
            next(error)
        }

    }
}

export { IndexFarm_producerController }