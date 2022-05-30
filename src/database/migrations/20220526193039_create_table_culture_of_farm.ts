import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('culture_of_farm', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

        table.uuid('id_farm').references('farm.id').notNullable();
        table.uuid('id_culture').references('culture.id').notNullable();
        table.decimal('acres_farm').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    }).then(() => knex.raw(onUpdateTrigger('culture_of_farm')));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('culture_of_farm');
}
