// This is called a "barrel file". It's sole purpose is to import values/functions and export them in one object.

const list = require('./list');
// const create = require('./create');
const show = require('./show');
// const update = require('./update');
const find = require('./find');

// const login = require('./login');
// const logout = require('./logout');
// const showMe = require('./show-me');

module.exports = {
  list,
  // create,
  show,
  // update,
  find,
  // login,
  // logout,
  // showMe,
};

