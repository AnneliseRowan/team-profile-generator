module.exports = [
    {
        type: 'input',
        name: 'engineer-name',
        message: `What is the engineers name?`,
      },
      {
        type: 'input',
        name: 'engineer-id',
        message: `What is the engineer's id?`,
      },
      {
        type: 'input',
        name: 'engineer-email',
        message: `What is the engineer's email address`,
      },
      {
        type: 'input',
        name: 'engineer-github',
        message: `What is the engineer's Github username?`,
      },
      {
        type: 'list',
        name: 'engineer-intern',
        message: 'Would you like to add an engineer or intern to your team?',
        choices: ["Engineer", "Intern", "Complete Profile"],
      },
];