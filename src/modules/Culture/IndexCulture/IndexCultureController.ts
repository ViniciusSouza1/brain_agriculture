import { NextFunction, Request, Response } from "express";
import { IIndexCultureRequest, IndexCultureService } from "./IndexCultureService";

class IndexCultureController {

    constructor(
        private IndexCulture: IndexCultureService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {

            const {
                page,
                name
            } = <any>req.query;

            const farm = <any>await this.IndexCulture.execute({
                page,
                name
            });

            return res.status(200).json(farm);
        } catch (error) {
            next(error)
        }

    }
}

export { IndexCultureController }