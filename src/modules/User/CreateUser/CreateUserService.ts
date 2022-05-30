import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";

export interface ICreateUserRequest {
    username: string;
    password: string;
    name: string;
    last_name?: string;
    email?: string;
}

class CreateUserService {

    constructor(
        private userRepository: IUserRepository,
        private authRepository: IAuthRepository
    ) { }

    async execute(data: ICreateUserRequest) {

        if (!data.username) {
            throw new Error('username inválido')
        }
        const space_between_username = this.authRepository.hasWhiteSpace(data.username);

        if (space_between_username) {
            throw new Error('Usuário não pode possuir espaços em branco')
        }

        const user = await this.userRepository.findByusername(data.username);

        if (user) {
            throw new Error('Nome de usuário já existente')
        }

        if (!data.password || data.password.length > 6) {
            throw new Error('A senha deve possuir mais de 6 caracteres')
        }

        const password_encrypted = await this.authRepository.encryptedPassword(data.password)

        const createdUser = await this.userRepository.createUser({ username: data.username, email: data.email, last_name: data.last_name, name: data.name, password: password_encrypted });

        return createdUser.id;

    }

}

export { CreateUserService }