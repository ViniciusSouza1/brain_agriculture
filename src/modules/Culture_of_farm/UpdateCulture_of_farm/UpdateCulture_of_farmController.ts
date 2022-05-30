import { NextFunction, Request, Response } from "express";
import { UpdateCulture_of_farmService } from "./UpdateCulture_of_farmService";

class UpdateCulture_of_farmController {
    
    constructor(
        private createCulture_of_farm: UpdateCulture_of_farmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                id_farm,
                id_culture,
                acres_farm
            } = req.body;

            const { id } = req.params;

            const culture_of_farm = await this.createCulture_of_farm.execute({
                id,
                id_farm,
                id_culture,
                acres_farm
            });

            return res.status(201).json(culture_of_farm);
        } catch (error) {
            next(error)
        }

    }
}

export { UpdateCulture_of_farmController }