const Employee = require("./employee.js"); 


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    }


    gitGithub() {
        return this.github; 
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer; 