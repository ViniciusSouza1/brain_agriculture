import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IFarm_producerRepository } from "../../../repositories/IFarm_producerRepository";

export interface IUpdateFarm_producerRequest {
    id: string;
    cpf_cnpj?: string;
    password?: string;
    name?: string;
    city?: string;
    state?: string;
    last_name?: string;
    email?: string;
}

class UpdateFarm_producerService {

    constructor(
        private farm_producerRepository: IFarm_producerRepository,
        private authRepository: IAuthRepository
    ) { }

    async execute(data: IUpdateFarm_producerRequest) {

        if (data.cpf_cnpj) {
            const isValid = await this.farm_producerRepository.isValidCpf_cnpj(data.cpf_cnpj);

            if (!isValid) {
                throw new Error('Cpf/Cnpj inválido')
            }

            const user = await this.farm_producerRepository.findBycpf_cnpj(data.cpf_cnpj);

            if (user) {
                throw new Error('Cpf/cnpj já existente')
            }
        }
        
        if (data.password) {
            data.password = await this.authRepository.encryptedPassword(data.password)
        }

        const updatedFarm_producer = await this.farm_producerRepository.updateFarm_producer({id: data.id, cpf_cnpj: data.cpf_cnpj, email: data.email, last_name: data.last_name, name: data.name, city: data.city, state: data.state, password: data.password });

        return updatedFarm_producer;
    }

}

export { UpdateFarm_producerService }