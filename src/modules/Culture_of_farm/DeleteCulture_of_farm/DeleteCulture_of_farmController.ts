import { NextFunction, Request, Response } from "express";
import { DeleteCulture_of_farmService } from "./DeleteCulture_of_farmService";

class DeleteCulture_of_farmController {
    constructor(
        private deleteCulture_of_farm: DeleteCulture_of_farmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {


            const {
                id
            } = <any>req.params;

            const company = await this.deleteCulture_of_farm.execute({
                id
            });

            return res.status(200).json(company);
        } catch (error) {
            next(error)
        }
    }
}

export { DeleteCulture_of_farmController }