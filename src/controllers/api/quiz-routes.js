const router = require("express").Router();
const {
  Quiz,
  Questions,
  Answers,
  CorrectAnswers,
  User,
} = require("../../models");

router.get("/quiz", withAuth, async (req, res) => {
  try {
    const allQuizData = await Quiz.findAll({});

    const allQuizzes = allQuizData.map((quiz) => quiz.get({ plain: true }));

    res.json({ allQuizzes, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/quiz", withAuth, async (req, res) => {
  try {
    const newQuiz = await Quiz.create({
      title: req.body.title,
      author: req.body.author,
    });
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/quiz/:id", wiithAuth, async (req, res) => {
  try {
    const singleQuizData = await Quiz.findByPk({
      where: {
        is: req.params.id,
      },
    });
    const singleQuiz = singleQuizData.get({ plain: true });
    res.status(200).json(singleQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/quiz/:id", withAuth, async (req, res) => {
  try {
    const { title, author } = req.body;
    const updateQuiz = await Quiz.update(
      { title, author },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/quiz/:id", withAuth, async (req, res) => {
  try {
    const deleteQuiz = await Quiz.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
