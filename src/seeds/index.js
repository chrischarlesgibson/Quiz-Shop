const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedQuiz = require("./quizData");
const seedQuestions = require("./questionsData");
const seedAnswers = require("./answersData");
const seedCorrectAnswer = require("./correctAnswersData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedQuiz();

  await seedQuestions();

  await seedAnswers();

  await seedCorrectAnswer();

  process.exit(0);
};

seedAll();
