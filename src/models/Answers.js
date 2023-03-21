const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Answers extends Model {}

Answers.init({
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,

    references: {
      model: "question",
      key: "id",
    },
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "answers",
});

module.exports = Answers;
