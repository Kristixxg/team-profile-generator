const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("should return officeNum when using constructor function", () => {
    const officeNum = "5000";
    const manager = new Manager("Apple", 100, "apple@gmail.com", officeNum);
    expect(manager.officeNumber).toBe(officeNum);
});

test("should return officeNum when using getOfficeNumber() function", () => {
    const officeNum = "5000";
    const manager = new Manager("Apple", 100, "apple@gmail.com", officeNum);
    expect(manager.getOfficeNumber()).toBe(officeNum);
});