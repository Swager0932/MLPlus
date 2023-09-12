const User = require('../models/user');
const Lesson = require('../models/lesson');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
  // ////////////////////////////////////////
  await Lesson.create('Silly Cory', 'https://www.youtube.com/embed/6gHfVQ50OnQ?si=ti_apvfSIrjFX4S6', 'Lorem ipsum dolor ');
};
