// controllers/todos.js

const Skillz = require("../models/skillz");

function index(req, res) {
  res.render("skills/index", {
    skills: Skillz.getAll(),
  });
}

module.exports = {
  index,
};
