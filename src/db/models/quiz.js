const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Quiz {

  // Why have a constructor here? We need a way to take the raw data returned from 
  // the database and hide the passwordHash before sending it back to the controller
  constructor({ id, question, answer, wrong1, wrong2, wrong3, quiz_id }) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.wrong1 = wrong1;
    this.wrong2 = wrong2;
    this.wrong3 = wrong3;
    this.quiz_id = quiz_id;
  }

  static async list() {
    const query = 'SELECT * FROM quiz';
    const { rows } = await knex.raw(query);
    return rows.map((quiz) => new Quiz(quiz)); // use the constructor to hide each user's passwordHash
  }

  static async find(quiz_id) {
    const query = 'SELECT * FROM quiz WHERE quiz_id = ?';
    const args = [quiz_id];
    const { rows } = await knex.raw(query, args);
    // const quiz = rows[0];
    // return quiz ? new Quiz(quiz) : null; 
    return rows
  }

  // static async findByTitle(title) {
  //   const query = 'SELECT * FROM lessons WHERE title = ?';
  //   const args = [title];
  //   const { rows } = await knex.raw(query, args);
  //   const lesson = rows[0];
  //   return lesson ? new Lesson(lesson) : null;
  // }

  static async create(question, answer, wrong1, wrong2, wrong3, quiz_id) {

    const query = `INSERT INTO quiz (question, answer, wrong1, wrong2, wrong3, quiz_id)
      VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
    const args = [question, answer, wrong1, wrong2, wrong3, quiz_id];
    const { rows } = await knex.raw(query, args);
    const lesson = rows[0];
    return new Quiz(lesson);
  }
}

module.exports = Quiz;
