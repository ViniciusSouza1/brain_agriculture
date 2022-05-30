import { NextFunction, Request, Response } from "express";
import { PizzaPerSoilUsageService } from "./PizzaPerSoilUsageService";

class PizzaPerSoilUsageController {

    constructor(
        private pizzaPerSoilUsage: PizzaPerSoilUsageService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
    
            const pizza_per_soil_usage = await this.pizzaPerSoilUsage.execute();

            return res.status(200).json(pizza_per_soil_usage);
        } catch (error) {
            next(error)
        }
    }
}

export { PizzaPerSoilUsageController }