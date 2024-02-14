const skills = [
    {id: 1, skill: 'HTML5', proficient: true},
    {id: 2, skill: 'CSS', proficient: true},
    {id: 3, skill: 'JavaScript', proficient: true},
    {id: 4, skill: 'Java', proficient: false},
    {id: 5, skill: 'Python', proficient: false},
    {id: 6, skill: 'SQL', proficient: false},
    {id: 7, skill: 'MongoDB', proficient: false},
    {id: 8, skill: 'JSON', proficient: false},
    {id: 9, skill: 'TypeScript', proficient: false},
    {id: 10, skill: 'Embedded JavaScript', proficient: true},
    {id: 11, skill: 'React', proficient: false},
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
};