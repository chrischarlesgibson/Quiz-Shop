const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CorrectAnswers extends Model {}

CorrectAnswers.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,

    references: {
      model: "quiz",
      key: "id",
    },
  },
  answer_id: {
    type: DataTypes.INTEGER,

    references: {
      model: "answer",
      key: "id",
    },
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "correctanswers",
});

module.exports = CorrectAnswers;
