const findQuiz = async (req, res) => {
    const {
      db: { Quiz }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    const theQuiz = await Quiz.find(id);
    if (!theQuiz) return res.sendStatus(404);
    
    // console.log(theLesson);
    res.send(theQuiz);
  };
  
  module.exports = findQuiz;