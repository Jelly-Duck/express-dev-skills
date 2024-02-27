const skills = [
  { id: 154111, skill: "HTML5", proficient: true },
  { id: 25422, skill: "CSS", proficient: true },
  { id: 35433, skill: "JavaScript", proficient: true },
  { id: 45444, skill: "Java", proficient: false },
  { id: 55455, skill: "Python", proficient: false },
  { id: 65466, skill: "SQL", proficient: false },
  { id: 75477, skill: "MongoDB", proficient: false },
  { id: 85488, skill: "JSON", proficient: false },
  { id: 95499, skill: "TypeScript", proficient: false },
  { id: 10541, skill: "Embedded JavaScript", proficient: true },
  { id: 11541, skill: "React", proficient: false },
];

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function deleteOne(index) {
  index = parseInt(index);
  skills.splice(index, 1);
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
};
