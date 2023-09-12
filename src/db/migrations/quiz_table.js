/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('quiz', (table) => {
  table.increments();
  table.string('question').notNullable();
  table.string('answer').notNullable();
  table.string('wrong1').notNullable();
  table.string('wrong2').notNullable();   
  table.string('wrong3').notNullable();
  table.integer('quiz_id').notNullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('quiz');
