const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Lesson {

  // Why have a constructor here? We need a way to take the raw data returned from 
  // the database and hide the passwordHash before sending it back to the controller
  constructor({ id, title, url, transcript }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.transcript = transcript;
  }

  static async list() {
    const query = 'SELECT * FROM lessons';
    const { rows } = await knex.raw(query);
    return rows.map((lesson) => new Lesson(lesson)); // use the constructor to hide each user's passwordHash
  }

  static async find(id) {
    const query = 'SELECT * FROM lessons WHERE id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const lesson = rows[0];
    return lesson ? new Lesson(lesson) : null; 
  }

  static async findByTitle(title) {
    const query = 'SELECT * FROM lessons WHERE title = ?';
    const args = [title];
    const { rows } = await knex.raw(query, args);
    const lesson = rows[0];
    return lesson ? new Lesson(lesson) : null;
  }

  static async create(title, url , transcript) {

    const query = `INSERT INTO lessons (title, url, transcript)
      VALUES (?, ?, ?) RETURNING *`;
    const args = [title, url, transcript];
    const { rows } = await knex.raw(query, args);
    const lesson = rows[0];
    return new Lesson(lesson);
  }
}

module.exports = Lesson;
