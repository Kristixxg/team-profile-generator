const Employee = require('../lib/Employee');

test('should set name using constructor function', () => {
    const name = 'Apple';
    const employeeName = new Employee(name);
    expect(employeeName.name).toBe(name);
})

test('should set id using constructor function', () => {
    const id = '100';
    const employeeID = new Employee("Apple", id);
    expect(employeeID.id).toBe(id);
})

test('should set email using constructor function', () => {
    const email = 'apple@gmail.com';
    const employeeEmail = new Employee("Apple", 100, email);
    expect(employeeEmail.email).toBe(email);
})

test('should get name using getName() function', () => {
    const name = 'Apple';
    const employeeName = new Employee(name);
    expect(employeeName.getName()).toBe(name);
})

test('should get id using getId() function', () => {
    const id = '100';
    const employeeID = new Employee("Apple", id);
    expect(employeeID.getId()).toBe(id);
})


test('should get email using getEmail() function', () => {
    const email = 'apple@gmail.com';
    const employeeEmail = new Employee("Apple", 100, email);
    expect(employeeEmail.getEmail()).toBe(email);
})

test('should get role using getRole() function', () => {
    const role = 'Employee';
    const newManager = new Employee("Apple", 100, 'apple@gmail.com');
    expect(newManager.getRole()).toBe(role);
})