import { ICulture_of_farmRepository } from "../../../repositories/ICulture_of_farmRepository";


export interface IDeleteCulture_of_farmRequest {
    id: string;
}

class DeleteCulture_of_farmService {

    constructor(
        private culture_of_farmRepository: ICulture_of_farmRepository,
    ) { }

    async execute(data: IDeleteCulture_of_farmRequest) {
        const response = await this.culture_of_farmRepository.delete(data.id);
        
        return response;
    }

}

export { DeleteCulture_of_farmService }