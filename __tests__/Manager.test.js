const Manager = require("../lib/manager"); 


test (`getRole() should return "Manager"`, () => {
    const test = "Manager"; 
    const man = new Manager ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(man.getRole()).toBe(test); 
})

test (`Can get Github user account"`, () => {
    const test = 1000000000; 
    const man = new Manager ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(man.getOfficeNumber()).toBe(test); 
})