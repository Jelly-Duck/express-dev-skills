// controllers/todos.js

const Skillz = require("../models/skillz");

function index(req, res) {
  res.render("skills/index", {
    skills: Skillz.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skillz.getOne(req.params.id),
  });
}

module.exports = {
  index,
  show,
};
