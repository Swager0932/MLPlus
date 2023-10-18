/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
  table.text('profile').defaultTo('https://th.bing.com/th/id/R.0f58f19c3986e66505d8a7ddd6230e84?rik=dRs98PMLxIh0lg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmystery-man-silhouette%2fmystery-man-silhouette-9.png&ehk=UEAkPBtXYeWkK2TmXPiBBko8Qa0bYvkT4Y7hmKY5S2E%3d&risl=&pid=ImgRaw&r=0').nullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
