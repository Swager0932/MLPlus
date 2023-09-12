const listQuizzes = async (req, res) => {
  // console.log(req)
  const { 
    db: { Quiz } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  const quizzes = await Quiz.list();
  res.send(quizzes);
};

module.exports = listQuizzes;
