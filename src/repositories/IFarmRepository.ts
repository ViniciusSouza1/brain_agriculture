import { Farm } from "../entities/Farm";
import { ICreateFarmRequest } from "../modules/Farm/CreateFarm/CreateFarmService";
import { IIndexFarmRequest } from "../modules/Farm/IndexFarm/IndexFarmService";
import { IUpdateFarmRequest } from "../modules/Farm/UpdateFarm/UpdateFarmService";

export interface IFarmRepository {
    createFarm(data: ICreateFarmRequest): Promise<Farm>
    search(data: IIndexFarmRequest): Promise<Farm[]>
    delete(id: string): Promise<number>,
    updateFarm(data: IUpdateFarmRequest): Promise<number>,
    verifyAllProperties(data: Farm): boolean
    verifyFarmSize(total_acres: number, agriculture_acres: number, vegetable_acres: number): boolean
    totalOfFarm(): Promise<{total_of_farm: number}>
    totalOfAcresFarm(): Promise<{total_of_acres_farm: number}>
    pizzaPerStateFarm(): Promise<{count: number, state: string}[]>
    pizzaPerCultureFarm(): Promise<{count: number, culture: string}[]>
}
