import { NextFunction, Request, Response } from "express";
import { PizzaPerStateFarmService } from "./PizzaPerStateFarmService";

class PizzaPerStateFarmController {

    constructor(
        private pizzaPerStateFarm: PizzaPerStateFarmService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
    
            const pizza_per_state = await this.pizzaPerStateFarm.execute();

            return res.status(200).json(pizza_per_state);
        } catch (error) {
            next(error)
        }
    }
}

export { PizzaPerStateFarmController }