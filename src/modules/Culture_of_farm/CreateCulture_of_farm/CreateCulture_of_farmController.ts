import { NextFunction, Request, Response } from "express";
import { CreateCulture_of_farmService } from "./CreateCulture_of_farmService";

class CreateCulture_of_farmController {

    constructor(
        private createCulture_of_farm: CreateCulture_of_farmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {

                id_farm,
                id_culture,
                acres_farm
            } = req.body;


            const culture_of_farm = await this.createCulture_of_farm.execute({
                id_farm,
                id_culture,
                acres_farm
            }, req.headers['authorization']);

            return res.status(201).json(culture_of_farm);
        } catch (error) {
            next(error)
        }

    }
}

export { CreateCulture_of_farmController }