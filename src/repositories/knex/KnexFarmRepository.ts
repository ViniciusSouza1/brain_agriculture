require('dotenv').config();

import { Farm } from "../../entities/Farm";
import { IFarmRepository } from "../IFarmRepository";
import { ICreateFarmRequest } from "../../modules/Farm/CreateFarm/CreateFarmService";
import { IIndexFarmRequest } from "../../modules/Farm/IndexFarm/IndexFarmService";
import { IUpdateFarmRequest } from "../../modules/Farm/UpdateFarm/UpdateFarmService";

const knex = require("../../database/index");

class KnexFarmRepository implements IFarmRepository {

    async createFarm(data: ICreateFarmRequest): Promise<Farm> {
        const farm = (await knex('farm')
            .insert({
                id_farm_producer: data.id_farm_producer,
                name: data.name,
                city: data.city,
                state: data.state,
                total_acres: data.total_acres,
                agriculture_acres: data.agriculture_acres,
                vegetable_acres: data.vegetable_acres
            }).returning('id'))[0]

        return farm;
    }

    async search(data: IIndexFarmRequest): Promise<Farm[]> {

        const query = knex('farm')
            .limit(10)
            .offset((<number>data.page - 1) * 10)

        if (data.id_farm_producer) {
            query
                .where('id_farm_producer', '=', data.id_farm_producer)
        }
        if (data.name) {
            query
                .where(knex.raw('name::text'), 'like', `%${data.name}%`)
        }

        if (data.city) {
            query
                .where(knex.raw('city::text'), 'like', `%${data.city}%`)
        }

        if (data.state) {
            query
                .where(knex.raw('state::text'), 'like', `%${data.state}%`)
        }

        const response = await query;

        return response;
    }

    async delete(id: string): Promise<number> {

        const response = await knex('farm')
            .where({ id })
            .delete()

        return response;
    }

    async updateFarm(data: IUpdateFarmRequest): Promise<number> {

        // if (data.total_acres || data.agriculture_acres || data.vegetable_acres) {
        //     if(!this.verifyFarmSize(data.total_acres, data.agriculture_acres, data.vegetable_acres)){
        //         throw new Error('Ta')
        //     }

        // }

        const query = knex('farm')
            .where('id', '=', data.id)

        if (data.city) {
            query.update('city', data.city)
        }
        if (data.state) {
            query.update(' state', data.state)
        }
        if (data.name) {
            query.update('name', data.name)
        }
        if (data.id_farm_producer) {
            query.update('id_farm_producer', data.id_farm_producer)
        }
        if (data.total_acres) {
            query.update('total_acres', data.total_acres)
        }
        if (data.agriculture_acres) {
            query.update('agriculture_acres', data.agriculture_acres)
        }
        if (data.vegetable_acres) {
            query.update('vegetable_acres', data.vegetable_acres)
        }

        const response = await query;

        return response;

    }

    verifyAllProperties(data: Farm): boolean {

        let response = true;

        for (const key in data) {
            if (!data[key]) {
                return false;
            }
        }

        return response;
    }

    verifyFarmSize(total_acres: number, agriculture_acres: number, vegetable_acres: number): boolean {
        console.log(agriculture_acres + vegetable_acres)
        if (total_acres >= agriculture_acres + vegetable_acres) {
            return true;
        } else {
            return false;
        }
    }

    async totalOfFarm(): Promise<{ total_of_farm: number }> {

        const total = await knex('farm')
            .count()

        return { total_of_farm: total[0].count };

    }

    async totalOfAcresFarm(): Promise<{ total_of_acres_farm: number }> {

        const total = await knex('farm')
            .sum('total_acres')

        return { total_of_acres_farm: total[0].sum }

    }

    async pizzaPerStateFarm(): Promise<{ count: number; state: string; }[]> {

        const count = await knex('farm')
            .distinct('state')
            .count()
            .groupBy('state')

        console.log(count, "TA")

        return count;
    }

    async pizzaPerCultureFarm(): Promise<{ count: number; sum: number, name: string; }[]> {

        const count = await knex('farm')
            .join('culture_of_farm', 'culture_of_farm.id_farm', 'farm.id')
            .join('culture', 'culture.id', 'culture_of_farm.id_culture')
            .sum({culture_acres:'culture_of_farm.acres_farm'})
            .count()
            .groupBy('culture_of_farm.id_culture', 'culture.name')
            .select('culture.name')

        return count;

    }

    async pizzaPerSoilUsage(): Promise<{ total_vegetable: number; total_agriculture: number; }[]> {

        const count = await knex('farm')
            .sum({ total_vegetable: 'vegetable_acres', total_agriculture: 'agriculture_acres' })

        return count;
    }


}



export { KnexFarmRepository }