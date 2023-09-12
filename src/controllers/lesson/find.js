const findLesson = async (req, res) => {
    const {
      db: { Lesson }, // this req.db.User property is put here by the addModelsToRequest middleware
      params: { id }, // this req.params.id is a part of the request URL
    } = req;
    const theLesson = await Lesson.find(id);
    if (!theLesson) return res.sendStatus(404);
    
    // console.log(theLesson);
    res.send(theLesson);
  };
  
  module.exports = findLesson;