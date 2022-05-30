import { Culture } from "../entities/Culture";
import { IIndexCultureRequest } from "../modules/Culture/IndexCulture/IndexCultureService";

export interface ICultureRepository {
    search(data: IIndexCultureRequest): Promise<Culture[]>
    delete(id: string): Promise<number>,
}
