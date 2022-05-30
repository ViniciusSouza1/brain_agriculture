import { Knex } from "knex";
const { onUpdateTrigger } = require("../../../knexfile");

export async function up(knex: Knex): Promise<void> {  

    return knex.schema.createTable('farm', table => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

        table.uuid('id_farm_producer').references('farm_producer.id').onDelete('CASCADE').notNullable();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.decimal('total_acres').notNullable();
        table.decimal('vegetable_acres').notNullable();
        table.decimal('agriculture_acres').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).then(() => knex.raw(onUpdateTrigger('farm')))
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('farm');
}
