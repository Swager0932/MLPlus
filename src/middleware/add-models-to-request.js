const User = require('../db/models/user');
const Lesson = require('../db/models/lesson');
const Quiz = require('../db/models/quiz');

// Lesson

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Lesson,
    Quiz,
  };
  next();
};

module.exports = addModelsToRequest;
