import { NextFunction, Request, Response } from "express";
import { PizzaPerCultureFarmService } from "./PizzaPerCultureFarmService";

class PizzaPerCultureFarmController {

    constructor(
        private pizzaPerCultureFarm: PizzaPerCultureFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
    
            const pizza_per_state = await this.pizzaPerCultureFarm.execute();

            return res.status(200).json(pizza_per_state);
        } catch (error) {
            next(error)
        }
    }
}

export { PizzaPerCultureFarmController }