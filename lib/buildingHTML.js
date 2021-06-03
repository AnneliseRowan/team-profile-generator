const path = require("path");
const fs = require("fs"); 

const template = path.resolve(__dirname, "../dist"); 

const building = employees => {
    const html = []; 

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => buildingManager(manager))
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer") 
        .map(engineer => buildingEngineer(engineer))
    ); 

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager") 
        .map(intern => buildingIntern(intern))
    ); 

    return buildingMain(html.join("")); 
}

const buildingManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8"); 

    template = replaceHolders(template, "name", manager.getName()); 
    template = replaceHolders(template, "role", manager.getRole()); 
    template = replaceHolders(template, "email", manager.getEmail()); 
    template = replaceHolders(template, "id", manager.getId()); 
    template = replaceHolders(template, "officeNumber", manager.getOfficeNumber()); 
}

const buildingEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8"); 

    template = replaceHolders(template, "name", engineer.getName()); 
    template = replaceHolders(template, "role", engineer.getRole()); 
    template = replaceHolders(template, "email", engineer.getEmail()); 
    template = replaceHolders(template, "id", engineer.getId()); 
    template = replaceHolders(template, "github", engineer.github()); 
}

const buildingIntern = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8"); 

    template = replaceHolders(template, "name", intern.getName()); 
    template = replaceHolders(template, "role", intern.getRole()); 
    template = replaceHolders(template, "email", intern.getEmail()); 
    template = replaceHolders(template, "id", intern.getId()); 
    template = replaceHolders(template, "school", intern.school()); 
}

const buildingMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "team.html"), "utf8"); 
    return replaceHolders(template, "team", html); 
}

const replaceHolders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm"); 
    return template.replace(pattern, value); 
}

module.exports = building; 