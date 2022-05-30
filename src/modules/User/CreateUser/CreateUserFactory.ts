import { KnexUserRepository } from "../../../repositories/knex/KnexUserRepository";
import { KnexAuthRepository } from "../../../repositories/knex/KnexAuthRepository";
import { CreateUserService } from "./CreateUserService";
import { CreateUserController } from "./CreateUserController";
export const CreateUserFactory = () => {
    const userRepository = new KnexUserRepository();
    const authRepository = new KnexAuthRepository();
    const createUser = new CreateUserService(userRepository, authRepository)
    const createUserController = new CreateUserController(createUser);

    return createUserController;
}