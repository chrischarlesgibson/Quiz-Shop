const { CorrectAnswers } = require("../models");

const correctAnswersSeed = [
  {
    quiz_id: "1",
    answer_id: "1",
  },
  {
    quiz_id: "1",
    answer_id: "2",
  },
  {
    quiz_id: "1",
    answer_id: "3",
  },
  {
    quiz_id: "1",
    answer_id: "4",
  },
];

const seedCorrectAnswers = () => CorrectAnswers.bulkCreate(correctAnswersSeed);

module.exports = seedCorrectAnswers;
