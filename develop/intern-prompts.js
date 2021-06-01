module.exports = [
    {
        type: 'input',
        name: 'intern-name',
        message: `What is the intern's name?`,
      },
      {
        type: 'input',
        name: 'intern-id',
        message: `What is the intern's id?`,
      },
      {
        type: 'input',
        name: 'intern-email',
        message: `What is the intern's email address`,
      },
      {
        type: 'input',
        name: 'intern-github',
        message: `What is the intern's school?`,
      },
      {
        type: 'list',
        name: 'engineer-intern',
        message: 'Would you like to add an engineer or intern to your team?',
        choices: ["Engineer", "Intern", "Complete Profile"],
      },
];