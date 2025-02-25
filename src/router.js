const express = require('express');
const lessonController = require('./controllers/lesson/index'); 
const quizController = require('./controllers/quiz/index'); 
const userController = require('./controllers/user/index');  // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get('/users', userController.list);
Router.get('/lessons', lessonController.list);
Router.get('/lessons/:id', lessonController.find)
Router.get('/quiz/:id', quizController.find);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);


Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/users/:id', checkAuthentication, userController.pro);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
