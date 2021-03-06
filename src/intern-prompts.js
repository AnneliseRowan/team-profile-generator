module.exports = [
  {
    type: 'input',
    name: 'name',
    message: `What is the intern's name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the intern's id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the intern's email address`,
  },
  {
    type: 'input',
    name: 'school',
    message: `What is the intern's school?`,
  },
  {
    type: 'list',
    name: 'engineerIntern',
    message: 'Would you like to add an engineer or intern to your team?',
    choices: ["Engineer", "Intern", "Complete Team"],
  },
];