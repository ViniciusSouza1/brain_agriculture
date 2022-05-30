import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {  
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    return knex.schema.createTable('user', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        //table.increments('id');
        
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('last_name');
        table.string('email');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => knex.raw(onUpdateTrigger('user')))
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}
