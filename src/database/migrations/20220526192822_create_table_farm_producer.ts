import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {  

    return knex.schema.createTable('farm_producer', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
 
        table.string('cpf_cnpj').unique().notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('last_name');
        table.string('email');
        table.string('city');
        table.string('state');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => knex.raw(onUpdateTrigger('farm_producer')))
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('farm_producer');
}
