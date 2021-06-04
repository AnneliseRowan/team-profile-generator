const Intern = require("../lib/intern"); 


test (`getRole() should return "Intern"`, () => {
    const test = "Intern"; 
    const int = new Intern ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(int.getRole()).toBe(test); 
})

test (`Can get school name"`, () => {
    const test = "schoolName"; 
    const int = new Intern ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(int.getSchool()).toBe(test); 
})