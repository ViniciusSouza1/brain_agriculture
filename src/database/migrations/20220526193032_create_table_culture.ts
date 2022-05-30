import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('culture', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

        table.string('name').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    }).then(() => knex.raw(onUpdateTrigger('culture'))).then(
        async function () {
            await knex('culture').insert({ name: "Soja" })
            await knex('culture').insert({ name: "Milho" })
            await knex('culture').insert({ name: "Algodão" })
            await knex('culture').insert({ name: "Café" })
            await knex('culture').insert({ name: "Cana de açucar" })
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('culture');
}