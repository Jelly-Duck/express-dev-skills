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

async function create(req, res) {
  try {
    const skills = Skillz.getAll();
    const newSkill = req.body;
    skills.push(newSkill);
    console.log(newSkill);
    res.redirect("/skillz");
  } catch (err) {
    console.log(err);
  }
}

function deleteSkill(req, res) {
  Skillz.deleteOne(req.params.index);
  res.redirect("/skillz");
}
module.exports = {
  index,
  show,
  create,
  deleteSkill,
};
