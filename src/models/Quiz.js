const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quiz extends Model {}

Quiz.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: DataTypes.STRING,

    references: {
      model: "user",
      key: "username",
    },
  },
  created_at: {
    type: DataTypes.DATE,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "quiz",
});

module.exports = Quiz;
