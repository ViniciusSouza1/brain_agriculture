import { Culture_of_farm } from "../entities/Culture_of_farm";
import { ICreateCulture_of_farmRequest } from "../modules/Culture_of_farm/CreateCulture_of_farm/CreateCulture_of_farmService";
import { IIndexCulture_of_farmRequest } from "../modules/Culture_of_farm/IndexCulture_of_farm/IndexCulture_of_farmService";
import { IUpdateCulture_of_farmRequest } from "../modules/Culture_of_farm/UpdateCulture_of_farm/UpdateCulture_of_farmService";

export interface ICulture_of_farmRepository {
    createCulture_of_farm(data: ICreateCulture_of_farmRequest): Promise<Culture_of_farm>
    search(data: IIndexCulture_of_farmRequest): Promise<Culture_of_farm[]>
    delete(id: string): Promise<number>,
    updateCulture_of_farm(data: IUpdateCulture_of_farmRequest): Promise<number>,
    verifyAllProperties(data: Culture_of_farm): boolean
    verifyCulture_of_farmSize(data: ICreateCulture_of_farmRequest): Promise<void>
    verifyCulture_of_farmSizeToUpdate(data: IUpdateCulture_of_farmRequest): Promise<void>
}
