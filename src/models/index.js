const User = require("./User");
const Quiz = require("./Quiz");
const Questions = require("./Questions");
const Answers = require("./Answers");
const CorrectAnswers = require("./CorrectAnswers");

User.hasMany(Quiz, {
  foreignKey: "user_id",
});

Quiz.belongsTo(User, {
  foreignKey: "user_id",
});

Quiz.hasMany(Questions, {
  foreignKey: "quiz_id",
});

Quiz.hasMany(Answers, {
  foreignKey: "quiz_id",
});

Quiz.hasMany(CorrectAnswers, {
  foreignKey: "quiz_id",
});

Questions.belongsTo(Quiz, {
  foreignKey: "quiz_id",
});

Questions.hasMany(Answers, {
  foreignKey: "question_id",
});

Questions.hasOne(CorrectAnswers, {
  foreignKey: "question_id",
});

CorrectAnswers.belongsTo(Questions, {
  foreignKey: "question_id",
});

Answers.belongsTo(Questions, {
  foreignKey: "question_id",
});

module.exports = { User, Quiz, Questions, CorrectAnswers, Answers };
