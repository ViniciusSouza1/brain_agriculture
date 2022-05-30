import { Farm_producer } from "../entities/Farm_producer";
import { ICreateFarm_producerRequest } from "../modules/Farm_producer/CreateFarm_producer/CreateFarm_producerService";
import { IIndexFarm_producerRequest } from "../modules/Farm_producer/IndexFarm_producer/IndexFarm_producerService";
import { IUpdateFarm_producerRequest } from "../modules/Farm_producer/UpdateFarm_producer/UpdateFarm_producerService";

export interface IFarm_producerRepository {
    findBycpf_cnpj(cpf_cnpj: string): Promise<Farm_producer>
    createFarm_producer(data: ICreateFarm_producerRequest): Promise<Farm_producer>
    search(data: IIndexFarm_producerRequest): Promise<Farm_producer[]>
    isValidCpf_cnpj(cpf: any): Promise<boolean>,
    delete(id: string): Promise<number>,
    updateFarm_producer(data: IUpdateFarm_producerRequest): Promise<number>
}
