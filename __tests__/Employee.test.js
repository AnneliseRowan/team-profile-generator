const Employee = require("../lib/employee"); 

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
test("Can set name via constructor arguments", () => {
    const name = "Annelise";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Annelise", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "Annelise@test.com";
    const e = new Employee("Annelise", 1, testValue);
    expect(e.email).toBe(testValue);
});

test (`Can get user name by getName()`, () => {
    const test = "Annelise Rowan"; 
    const emp = new Employee (test);
    expect(emp.getName()).toBe(test); 
})

test (`Can get user id by getId()`, () => {
    const test = 111; 
    const emp = new Employee ("Annelise", test);
    expect(emp.getId()).toBe(test); 
})

test (`Can get user email by getEmail()`, () => {
    const test = "Annelise@Annelise.com"; 
    const emp = new Employee ("Annelise", 1, test);
    expect(emp.getEmail()).toBe(test); 
})

test (`Can get Github user account`, () => {
    const test = "Employee"; 
    const emp = new Employee("Annelise", 1, "Annelise@Annelise.com");
    expect(emp.getRole()).toBe(test); 
})



