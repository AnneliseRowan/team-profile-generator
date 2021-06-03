const inquirer = require("inquirer"); 
const fs = require("fs"); 
const path = require("path"); 

const buildingHTML = require("./lib/buildingHTML.js")

const managerPrompts = require("./src/manager-prompts.js");
const Manager = require("./lib/manager"); 

const internPrompts = require("./src/intern-prompts.js");
const Intern = require("./lib/intern"); 

const engineerPrompts = require("./src/engineer-prompts.js"); 
const Engineer = require("./lib/engineer"); 

const OUTPUT_DIRECTION = path.resolve(__dirname, "output"); 
const outputPath = path.join(OUTPUT_DIRECTION, "wholeTeam.html"); 

let nextChoice; 
const teamInfo = [];


inquirer
    .prompt(managerPrompts)
    .then((answers) => {
        teamInfo.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

        nextChoice = answers.engineerIntern; 

        if(nextChoice === "Engineer") {
            getEngineer(); 
        } else if (nextChoice === "Intern") {
            getIntern(); 
        } else {
            const html = buildingHTML(teamInfo);
            htmlPageContent(html); 
        }
        
    })
    .catch(function(error) {
        console.log("AHHHHHH:", error); 

        process.exit(1)
    })


const getEngineer = () => {
    inquirer
        .prompt(engineerPrompts)
        .then((answers) => {
            teamInfo.push(new Engineer(answers.name, answers.id, answers.email, answers.github)); 

            nextChoice = answers.engineerIntern; 

            if(nextChoice === "Engineer") {
                getEngineer(); 
            } else if(nextChoice === "Intern") {
                getIntern(); 
            } else {
                const html = buildingHTML(teamInfo); 
                htmlPageContent(html); 
            }
        })
}

const getIntern = () => {
    inquirer
        .prompt(internPrompts)
        .then((answers) => {
            teamInfo.push(new Intern(answers.name, answers.id, answers.email. answers.school)); 

            nextChoice = answers.engineerIntern; 

            if(nextChoice === "Engineer") {
                getEngineer(); 
            } else if(nextChoice === "Intern") {
                getIntern(); 
            } else {
                const html = buildingHTML(teamInfo); 
                htmlPageContent(html); 
            }
        })
}

const htmlPageContent = (html) => {
    fs.writeFile(outputPath, html, (error) => {
        if(error) {return console.log("Ahhhh :", error)}

        console.log("Voila! Meet your team!!")
    })
}