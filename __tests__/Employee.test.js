const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/employee"); 

TestWatcher("Can instantiate Employee instance", () => {
    const e = new Employee(); 
    expect(typeof(e)).toBe("object");
})