const inquirer = require("inquirer"); 
const fs = require("fs"); 
const managerPrompts = require("./manager-prompts.js");
const internPrompts = require("./intern-prompts.js");
const engineerPrompts = requirer("./engineer-prompts.js"); 


const generateHTML = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Hi! My name is ${answers.name}</h1>
                <p class="lead">I am from ${answers.address}</p>
                <h3> Example heading <span class="badge badge-secondary"> Contact Me</span></h3>
    
                <ul class="list-group">
                    <li class="list-group-item">My github username is ${answers.linkedIn}</li>
                    <li class="list-group-item">My github username is ${answers.github}</li>
                </ul>
    
            </div>
        </header>
    </body>
    </html>`; 

inquirer
    .prompt(questions)
    .then((replies) => {
        switch(replies.license) {
            case "MIT" :
                replies.license = licenseText.mit; 
                badge = badgeIcon.mit
                break; 
            case "Apache" :
                replies.license = licenseText.apache; 
                badge = badgeIcon.apache
                break;
            case "GNU" :
                replies.license = licenseText.gnu; 
                badge = badgeIcon.gnu
                break; 
            case "ISC" :
                replies.license = licenseText.isc;
                badge = badgeIcon.isc
                break; 
        }
        const file = "readMe.md";

        fs.writeFile(file, generateHTML(replies), (err) => 
        err ? console.log(err) : console.log("success!!!!whoohoo!!!")
        );
    }); 