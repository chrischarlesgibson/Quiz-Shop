const { Questions } = require("../models");

const questionsSeed = [
  {
    question: "how many claws?",
    quiz_id: "1",
  },
  {
    question: "how many eyes?",
    quiz_id: "1",
  },
  {
    question: "how many feet?",
    quiz_id: "1",
  },
  {
    question: "how many toes?",
    quiz_id: "1",
  },
  {
    question: "how many claws?",
    quiz_id: "2",
  },
  {
    question: "how many claws?",
    quiz_id: "2",
  },
  {
    question: "how many claws?",
    quiz_id: "2",
  },
  {
    question: "how many claws?",
    quiz_id: "2",
  },
];

const seedQuestions = () => Questions.bulkCreate(questionsSeed);

module.exports = seedQuestions;
