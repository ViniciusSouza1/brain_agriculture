import { User } from "../entities/User";
import { ICreateUserRequest } from "../modules/User/CreateUser/CreateUserService";
import { IIndexUserRequest } from "../modules/User/IndexUser/IndexUserService";

export interface IUserRepository {

    findByusername(username: string): Promise<User>
    createUser(data: ICreateUserRequest): Promise<User>
    search(data: IIndexUserRequest): Promise<User[]>
}
