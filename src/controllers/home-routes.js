const router = require("express").Router();
const { Answers, CorrectAnswers, Questions, Quiz, User } = require("../models");
const withAuth = require("../utils/auth");

//get all quizzes

router.get("/", withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findAll({});

    const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));

    res.json({ quizzes, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one quiz

router.get("/quiz/:id", withAuth, async (req, res) => {
  try {
    const singleQuizData = await Quiz.findByPk(req.params.id, {});

    const singleQuiz = singleQuizData.get({ plain: true });

    res.json({ singleQuiz, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Quiz }],
    });
    const user = userData.get({ plain: true });

    res.json({ user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/account");
    return;
  }
  res.redirect("/signup");
});

module.exports = router;
