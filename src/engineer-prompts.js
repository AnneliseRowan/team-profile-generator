module.exports = [
  {
    type: 'input',
    name: 'name',
    message: `What is the engineers name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the engineer's id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the engineer's email address`,
  },
  {
    type: 'input',
    name: 'github',
    message: `What is the engineer's Github username?`,
  },
  {
    type: 'list',
    name: 'engineerIntern',
    message: 'Would you like to add an engineer or intern to your team?',
    choices: ["Engineer", "Intern", "Complete Team"],
  },
];