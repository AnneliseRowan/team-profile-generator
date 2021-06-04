const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/employee"); 

describe("Can instantiate Employee instance", () => {
    const e = new Employee(); 
    expect(typeof(e)).toBe("object");
})