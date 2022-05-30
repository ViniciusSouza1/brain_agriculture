require('dotenv').config();

import { Farm_producer } from "../../entities/Farm_producer";
import { IFarm_producerRepository } from "../IFarm_producerRepository";
import { ICreateFarm_producerRequest } from "../../modules/Farm_producer/CreateFarm_producer/CreateFarm_producerService";
import { IIndexFarm_producerRequest } from "../../modules/Farm_producer/IndexFarm_producer/IndexFarm_producerService";
import { IUpdateFarm_producerRequest } from "../../modules/Farm_producer/UpdateFarm_producer/UpdateFarm_producerService";
const axios = require("axios").default;

const knex = require("../../database/index");

class KnexFarm_producerRepository implements IFarm_producerRepository {

    async findBycpf_cnpj(cpf_cnpj: string): Promise<Farm_producer> {

        let farm_producer = await knex('farm_producer')
            .where({ cpf_cnpj })
            .first()

        return farm_producer;
    }

    async createFarm_producer(data: ICreateFarm_producerRequest): Promise<Farm_producer> {
        const farm_producer = (await knex('farm_producer')
            .insert({
                cpf_cnpj: data.cpf_cnpj,
                email: data.email,
                password: data.password,
                city: data.city,
                state: data.state,
                name: data.name,
                last_name: data.last_name ? data.last_name : ""
            }).returning('id'))[0]

        return farm_producer;
    }
    async search(data: IIndexFarm_producerRequest): Promise<Farm_producer[]> {

        const query = knex('farm_producer')
            .limit(10)
            .offset((<number>data.page - 1) * 10)

        if (data.email) {
            query
                .where(knex.raw('email::text'), 'like', `%${data.email}%`)

        }
        if (data.cpf_cnpj) {
            query
                .where(knex.raw('cpf_cnpj::text'), 'like', `%${data.cpf_cnpj}%`)
        }

        const response = await query;

        return response;
    }

    async isValidCpf_cnpj(cpf_cnpj: any): Promise<boolean> {
        if (typeof cpf_cnpj !== 'string') return false

        switch (cpf_cnpj.length) {
            case 11: {
                cpf_cnpj = cpf_cnpj.replace(/[^\d]+/g, '')

                if (!!cpf_cnpj.match(/(\d)\1{10}/)) return false

                cpf_cnpj = cpf_cnpj.split('').map(el => +el)

                const rest = (count) => (cpf_cnpj.slice(0, count - 12)
                    .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10

                return rest(10) === cpf_cnpj[9] && rest(11) === cpf_cnpj[10]
            }
            case 14: {
                let result: boolean;
                let options = {
                    method: 'POST',
                    url: 'http://dsaprospectos.com.br:8881/valid',
                    params: {
                        cnpj: cpf_cnpj,
                    },
                };

                await axios.request(options).then(async function (response) {
                    result = (response.data.length > 0)
                }).catch(function (error) {
                    console.error(error);
                });

                return result;
            }
            default: {
                return false;
            }
        }
    }

    async delete(id: string): Promise<number> {

        const response = await knex('farm_producer')
            .where({ id })
            .delete()

        return response;
    }

    async updateFarm_producer(data: IUpdateFarm_producerRequest): Promise<number> {
        
        const query = knex('farm_producer')
            .where('id', '=', data.id)
        if(data.city){
            query.update('city', data.city)
        }
        if(data.state){
            query.update('state', data.state)
        }
        if(data.name){
            query.update('name', data.name)
        }
        if(data.last_name){
            query.update('last_name', data.last_name)
        }
        if(data.password){
            query.update('password', data.password)
        }
        if(data.cpf_cnpj){
            query.update('cpf_cnpj', data.cpf_cnpj)
        }
        if(data.email){
            query.update('email', data.email)
        }

        const response = await query;

        return response;

    }

}



export { KnexFarm_producerRepository }