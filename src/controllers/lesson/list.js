const listLessons = async (req, res) => {
  console.log(req)
  const { 
    db: { Lesson } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  const lessons = await Lesson.list();
  res.send(lessons);
};

module.exports = listLessons;
