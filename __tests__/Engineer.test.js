const Engineer = require("../lib/engineer"); 


test (`getRole() should return "Engineer"`, () => {
    const test = "Engineer"; 
    const eng = new Engineer ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(eng.getRole()).toBe(test); 
})

test (`Can get Github user account"`, () => {
    const test = "GithubUser"; 
    const eng = new Engineer ("Annelise", 1, "Annelise@Annelise.com", test);
    expect(eng.getGithub()).toBe(test); 
})

