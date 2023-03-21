const { Quiz } = require("../models");

const quizSeed = [
  {
    title: "Cats",
    author: "MikeSmith",
    created_at: "2023-03-10",
  },
  {
    title: "dogs",
    author: "MikeSmith",
    created_at: "2023-03-09",
  },
  {
    title: "cookies",
    author: "MikeSmith",
    created_at: "2023-03-08",
  },
];

const seedQuizes = () => Quiz.bulkCreate(quizSeed);

module.exports = seedQuizes;
