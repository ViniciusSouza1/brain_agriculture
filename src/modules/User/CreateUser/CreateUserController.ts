import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    
    constructor(
        private createUser: CreateUserService
    ) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                username,
                email,
                password,
                name,
                last_name
            } = req.body;

            const userLogged = await this.createUser.execute({
                username,
                email,
                password,
                name,
                last_name
            });

            return res.status(201).json(userLogged);
        } catch (error) {
            next(error)
        }

    }
}

export { CreateUserController }