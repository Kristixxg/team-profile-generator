const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("should get github", () => {
    const github = "user";
    const engineer = new Engineer("Apple", 100, "apple@gmail.com", github);
    expect(engineer.github).toBe(github);
})

test("should get git using getGithub()", () => {
    const github = "user";
    const engineer = new Engineer("Apple", 100, "apple@gmail.com", github);
    expect(engineer.getGithub()).toBe(github);
})