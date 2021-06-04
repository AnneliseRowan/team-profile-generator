const Employee = require("../lib/employee"); 

test (`Can start initiate Employee`, () => {
    const test = new Employee(); 
    expect(typeof(test)).toBe("object"); 
})

test (`Can set the name using constructor`, () => {
    const test = "Annelise Rowan"; 
    const emp = new Employee(test);
    expect(emp.test).toBe(test); 
})

test (`Can set the id using constructor`, () => {
    const test = 111; 
    const emp = new Employee("Annelise", test);
    expect(emp.id).toBe(test); 
})

test (`Can set the email using constructor`, () => {
    const test = "Annelise@Annelise.com"; 
    const emp = new Employee(test);
    expect(emp.email).toBe(test); 
})

test (`Can get user name by getName()`, () => {
    const test = "Annelise Rowan"; 
    const emp = new Employee (test);
    expect(emp.getName()).toBe(test); 
})

test (`Can get user id by getId()`, () => {
    const test = 111; 
    const emp = new Employee (test);
    expect(emp.getId()).toBe(test); 
})

test (`Can get user email by getEmail()`, () => {
    const test = "Annelise@Annelise.com"; 
    const emp = new Employee (test);
    expect(emp.getEmail()).toBe(test); 
})

test (`Can get Github user account`, () => {
    const test = "Employee"; 
    const emp = new Employee("Annelise", 1, "Annelise@Annelise.com");
    expect(emp.getRole()).toBe(test); 
})



