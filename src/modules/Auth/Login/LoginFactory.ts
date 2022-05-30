import { KnexAuthRepository } from "../../../repositories/knex/KnexAuthRepository";
import { LoginService } from "./LoginService";
import { LoginController } from "./LoginController";

export const LoginFactory = () => {
    const authRepository = new KnexAuthRepository();
    const login = new LoginService(authRepository)
    const loginController = new LoginController(login);

    return loginController;
}