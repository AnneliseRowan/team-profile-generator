const path = require("path");
const fs = require("fs"); 

const templatesDir = path.resolve(__dirname, "../dist"); 

const building = employees => {
    let html = ""; 

    let managerEmp = employees.filter(employee => employee.getRole() === "Manager");
    managerEmp.forEach(manager => html += buildingManager(manager)); 

    let engineerEmp = employees.filter(employee => employee.getRole() === "Engineer");
    engineerEmp.forEach(engineer => html += buildingEngineer(engineer)); 

    let internEmp = employees.filter(employee => employee.getRole() === "Intern"); 
    internEmp.forEach(intern => html += buildingIntern(intern)); 

    return buildingMain(html); 
}

const buildingManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8"); 

    template = replaceHolders(template, "name", manager.getName()); 
    template = replaceHolders(template, "role", manager.getRole()); 
    template = replaceHolders(template, "email", manager.getEmail()); 
    template = replaceHolders(template, "id", manager.getId()); 
    template = replaceHolders(template, "officeNumber", manager.getOfficeNumber()); 

    return template; 
}

const buildingEngineer = (engineer) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8"); 

    template = replaceHolders(template, "name", engineer.getName()); 
    template = replaceHolders(template, "role", engineer.getRole()); 
    template = replaceHolders(template, "email", engineer.getEmail()); 
    template = replaceHolders(template, "id", engineer.getId()); 
    template = replaceHolders(template, "github", engineer.getGithub()); 

    return template; 
}

const buildingIntern = (intern) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8"); 

    template = replaceHolders(template, "name", intern.getName()); 
    template = replaceHolders(template, "role", intern.getRole()); 
    template = replaceHolders(template, "email", intern.getEmail()); 
    template = replaceHolders(template, "id", intern.getId()); 
    template = replaceHolders(template, "school", intern.getSchool()); 

    return template; 
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