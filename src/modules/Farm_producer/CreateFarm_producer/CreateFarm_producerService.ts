import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IFarm_producerRepository } from "../../../repositories/IFarm_producerRepository";

export interface ICreateFarm_producerRequest {
    cpf_cnpj: string;
    password: string;
    name: string;
    city: string;
    state: string;
    last_name?: string;
    email?: string;
}

class CreateFarm_producerService {

    constructor(
        private farm_producerRepository: IFarm_producerRepository,
        private authRepository: IAuthRepository
    ) { }

    async execute(data: ICreateFarm_producerRequest) {

        if (!data.cpf_cnpj) throw new Error('cpf/cnpj inválido')


        if (!data.name) throw new Error('Nome é obrigatório')

        const isValid = await this.farm_producerRepository.isValidCpf_cnpj(data.cpf_cnpj);

        if (!isValid) {
            throw new Error('Cpf/Cnpj inválido')
        }

        const user = await this.farm_producerRepository.findBycpf_cnpj(data.cpf_cnpj);

        if (user) {
            throw new Error('Cpf/cnpj já existente')
        }

        if (!data.password || data.password.length > 6) {
            throw new Error('A senha deve possuir mais de 6 caracteres')
        }

        const password_encrypted = await this.authRepository.encryptedPassword(data.password)

        const createdFarm_producer = await this.farm_producerRepository.createFarm_producer({ cpf_cnpj: data.cpf_cnpj, email: data.email, last_name: data.last_name, name: data.name, city: data.city, state: data.state, password: password_encrypted });

        return createdFarm_producer.id;

    }

}

export { CreateFarm_producerService }