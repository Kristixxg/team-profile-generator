//get modual
const inquirer = require('inquirer');

//constructor functions
function team() {
    this.name = name;
    this.position = position;
    this.id = id;
    this.email = email;
    this.github = github;
}

//prototype function

team.prototype.printInfo = function(){

};

//

inquirer
  .prompt([
   {
       name: "name",
       message: "Teammate's name",
   },
   {
    name: "name",
    message: "Teammate's name",
    },
    {
        name: "name",
        message: "Teammate's name",
    },
    {
        name: "name",
        message: "Teammate's name",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  let managers = [];
  let teammates = [];
  let interns = [];

