const Employee = require('../lib/Employee');

test('should set name using constructor function', () => {
    const name = 'Apple';
    const employeeName = new Employee(name);
    expect(employeeName.name).toBe(name);
})