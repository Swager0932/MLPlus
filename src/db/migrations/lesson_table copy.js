/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('lessons', (table) => {
  table.increments();
  table.string('title').notNullable().unique();
  table.string('url').notNullable().unique();
  table.string('transcript').notNullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('lessons');
