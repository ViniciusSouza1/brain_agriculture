require('dotenv').config

import { User_logged } from "../../../entities/User_logged";
import { IUserRepository } from "../../../repositories/IUserRepository";


export interface ILoginRequest {
    username: string;
    password: string;
}

class LoginService {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(data: ILoginRequest) {

        if (!data.username || !data.password) {
            throw new Error('Usuário ou senha inválidos')
        }

        const space_between_username = this.userRepository.hasWhiteSpace(data.username);

        if (space_between_username) {
            throw new Error('username não pode possuir espaços em branco')
        }

        const user = await this.userRepository.findByusername(data.username);

        if (!user) {
            throw new Error('Usuário inexistente')
        }

        const compare = await this.userRepository.comparePassword(user, data.password);
       
        if (!compare) {
            throw new Error('Senha incorreta.')
        }
        const token = await this.userRepository.generateToken(user.id);

        if (!token) {
            throw new Error('Erro na criação do token')
        }

        const userLogged = new User_logged({
            user: {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email
            },
            token: token
        });

        return userLogged;
    }

}

export { LoginService }