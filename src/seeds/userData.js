const { User } = require("../models");

const userSeed = [
  {
    username: "JohnDoe",
    email: "johndoe@gmail.com",
    pw: "password",
  },
  {
    username: "JaneDoe",
    email: "janedoe@gmail.com",
    pw: "password123",
  },
  {
    username: "MikeSmith",
    email: "mikesmith@gmail.com",
    pw: "password321",
  },
];

const seedUsers = () => User.bulkCreate(userSeed);

module.exports = seedUsers;
