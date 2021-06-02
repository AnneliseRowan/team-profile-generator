const inquirer = require("inquirer"); 
const fs = require("fs"); 
const managerPrompts = require("./develop/manager-prompts.js");
const internPrompts = require("./develop/intern-prompts.js");
const engineerPrompts = require("./develop/engineer-prompts.js"); 


const generateHTML = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <style>
            
        </style>
        <title>Document</title>
    </head>
    <body>
        <header style="background-color: #7395AE;" class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 style="font-size: 84px; font-weight: 400;" class="display-4 text-center">Hi! This is our team :D</h1>
            </div>
        </header>
        <main>
            <div class = "container">
                <div class="card" style="width: 18rem;">
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title" id="name">NAME: ${answers.name}</h5>
                    <p class="card-text" id="position">POSITION: ${answers.position}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${answers.id}</li>
                    <li class="list-group-item" id="email">EMAIL: ${answers.email}</li>
                    <li class="list-group-item" id="github">GITHUB: ${answers.github}</li>
                    <li class="list-group-item" id="office-number">GITHUB: ${answers.office-number}</li>
                    <li class="list-group-item" id="school">GITHUB: ${answers.school}</li>
                </ul>
                </div>
            </div>
        </main>
    </body>
</html>`; 

inquirer
    .prompt(managerPrompts)
    .then((answers) => {
        const htmlPageContent = generateHTML(answers); 

        fs.writeFile("index.html", htmlPageContent, (err) => 
        err ? console.log(err) : console.log("success!!!!whoohoo!!!")
        );
    }); 