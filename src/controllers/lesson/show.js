const showLesson = async (req, res) => {
  const {
    db: { Lesson }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { id }, // this req.params.id is a part of the request URL
  } = req;

  const lesson = await Lesson.find(id);
  if (!lesson) return res.sendStatus(404);

  res.send(lesson);
};

module.exports = showLesson;
