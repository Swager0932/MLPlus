const User = require('../db/models/user');
const Lesson = require('../db/models/lesson');
// Lesson

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Lesson,
  };
  next();
};

module.exports = addModelsToRequest;
