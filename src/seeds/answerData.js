const { Answers } = require("../models");

const answersSeed = [
  {
    answer: "2",
    question_id: "1",
  },
];

const seedAnswers = () => Answers.bulkCreate(answersSeed);

module.exports = seedAnswers;
