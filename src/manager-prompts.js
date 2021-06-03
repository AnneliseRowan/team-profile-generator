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
    name: 'officeNumber',
    message: `What is the team manager's office phone number?`,
  },
  {
    type: 'list',
    name: 'engineerIntern',
    message: 'Would you like to add an engineer or intern to your team?',
    choices: ["Engineer", "Intern"],
  },
];