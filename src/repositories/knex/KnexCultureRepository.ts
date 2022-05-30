require('dotenv').config();

import { Culture } from "../../entities/Culture";
import { ICultureRepository } from "../ICultureRepository";
import { IIndexCultureRequest } from "../../modules/Culture/IndexCulture/IndexCultureService";

const knex = require("../../database/index");

class KnexCultureRepository implements ICultureRepository {

    async search(data: IIndexCultureRequest): Promise<Culture[]> {

        const query = knex('culture')
            .limit(10)
            .offset((<number>data.page - 1) * 10)

        if (data.name) {
            query
                .where(knex.raw('name::text'), 'like', `%${data.name}%`)
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


}



export { KnexCultureRepository }