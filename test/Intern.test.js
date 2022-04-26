const { test, expect } = require('@jest/globals');
const intern = require('../lib/Intern');

test("should get school when using constructor function", ()=>{
    const school = "AAA";
    const Intern = new intern("Apple", 100, "apple@gmail.com", school);
    expect(Intern.school).toBe(school);
})

test("should get school using getSchool()", ()=>{
    const school = "AAA";
    const Intern = new intern("Apple", 100, "apple@gmail.com", school);
    expect(Intern.getSchool()).toBe(school);
})