module.exports = [
  {
    type: 'input',
    name: 'name',
    message: `What is the team manager's name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the team manager's id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the team manager's email address`,
  },
  {
    type: 'input',
    name: 'office-number',
    message: `What is the team manager's office phone number?`,
  },
  {
    type: 'list',
    name: 'engineer-intern',
    message: 'Would you like to add an engineer or intern to your team?',
    choices: ["Engineer", "Intern", "Exit"],
  },
];