require('dotenv').config();

import { Culture_of_farm } from "../../entities/Culture_of_farm";
import { ICulture_of_farmRepository } from "../ICulture_of_farmRepository";
import { ICreateCulture_of_farmRequest } from "../../modules/Culture_of_farm/CreateCulture_of_farm/CreateCulture_of_farmService";
import { IIndexCulture_of_farmRequest } from "../../modules/Culture_of_farm/IndexCulture_of_farm/IndexCulture_of_farmService";
import { IUpdateCulture_of_farmRequest } from "../../modules/Culture_of_farm/UpdateCulture_of_farm/UpdateCulture_of_farmService";
const knex = require("../../database/index");

class KnexCulture_of_farmRepository implements ICulture_of_farmRepository {

    async createCulture_of_farm(data: ICreateCulture_of_farmRequest): Promise<Culture_of_farm> {
        const farm = (await knex('culture_of_farm')
            .insert({
                id_farm: data.id_farm,
                id_culture: data.id_culture,
                acres_farm: data.acres_farm
            }).returning('id'))[0]

        return farm;
    }

    async search(data: IIndexCulture_of_farmRequest): Promise<Culture_of_farm[]> {

        const query = knex('culture_of_farm')
            .limit(10)
            .offset((<number>data.page - 1) * 10)

        if (data.id_farm) {
            query
                .where('id_farm', '=', data.id_farm)
        }
        if (data.id_culture) {
            query
                .where('id_culture', '=', data.id_culture)
        }

        const response = await query;

        return response;
    }

    async delete(id: string): Promise<number> {

        const response = await knex('culture_of_farm')
            .where({ id })
            .delete()

        return response;
    }

    async updateCulture_of_farm(data: IUpdateCulture_of_farmRequest): Promise<number> {

        const query = knex('farm')
            .where('id', '=', data.id)

        if (data.id_culture) {
            query.update('id_culture', data.id_culture)
        }
        if (data.acres_farm) {
            query.update(' acres_farm', data.acres_farm)
        }

        const response = await query;

        return response;

    }

    verifyAllProperties(data: Culture_of_farm): boolean {

        let response = true;

        for (const key in data) {
            if (!data[key]) {
                return false;
            }
        }

        return response;
    }

    async verifyCulture_of_farmSize(data: ICreateCulture_of_farmRequest): Promise<void> {

        const culture = await knex('culture_of_farm')
            .where('id_culture', '=', data.id_culture)
            .where('id_farm', '=', data.id_farm)

        if (culture.length > 0) throw new Error('Cultura já inserida nesta fazenda')

        const result = await knex('farm')
            .where('id', '=', data.id_farm)
            .select('agriculture_acres')

        const culture_of_farm = await knex('culture_of_farm')
            .where('id_farm', '=', data.id_farm)
            .sum('acres_farm')

        if (parseFloat(result[0].agriculture_acres) < parseFloat(culture_of_farm[0].sum) + data.acres_farm) throw new Error('Quantidade de hectares restantes da fazenda não corresponde com a nova cultura')

    }

    async verifyCulture_of_farmSizeToUpdate(data: IUpdateCulture_of_farmRequest): Promise<void> {

        const culture = await knex('culture_of_farm')
            .where('id', '=', data.id)

        const new_size = data.acres_farm - parseFloat(culture[0].acres_farm) 

        const result = await knex('farm')
            .where('id', '=', data.id_farm)
            .select('agriculture_acres')

        const culture_of_farm = await knex('culture_of_farm')
            .where('id_farm', '=', data.id_farm)
            .sum('acres_farm')

        if (parseFloat(result[0].agriculture_acres) < parseFloat(culture_of_farm[0].sum) + new_size) throw new Error('Quantidade de hectares restantes da fazenda não corresponde com a nova cultura')

    }

}



export { KnexCulture_of_farmRepository }