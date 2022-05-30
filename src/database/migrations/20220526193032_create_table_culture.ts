import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('culture', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

        table.string('name').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    
    }).then(() => knex.raw(onUpdateTrigger('culture'))).then(
        function () {
            knex('culture').insert({ name: "Soja" })
            knex('culture').insert({ name: "Milho" })
            knex('culture').insert({ name: "Algodão" })
            knex('culture').insert({ name: "Café" })
            knex('culture').insert({ name: "Cana de açucar" })
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('culture');
}
