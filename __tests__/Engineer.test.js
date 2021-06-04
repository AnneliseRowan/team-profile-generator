const Engineer = require("../lib/engineer"); 


test (`getRole() should return "Engineer"`, () => {
    const test = "Engineer"; 
    const eng = new Engineer ("Annelise", 1, "Annelise@Annelise.com", "github");
    expect(eng.getRole()).toBe(test); 
})