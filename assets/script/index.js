//get inquirer module
const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');

//prompt user question
function init() {

  inquirer
  .prompt([
    {
      type: "list",
      name: "addTeam",
      message: "What would you like to do",
      choices: ["Create a new team", "Cancel"],
    },
  ])
  .then((res) => {
  //  console.log(res);

  if (res.addTeam === "Create a new team") {
    createTeam();
  } else if (res.addTeam === 'Cancel') {
    return;
  }
  })
  .catch((err) => {
    console.log('There is an error');
  })

}


// Add a manager to create team
let createTeam = function() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "manager",
      message: "Enter manager name",
    },
    {
      type: "input",
      name: "managerID",
      message: "Enter manager's ID#",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter manager's Email address",
    },
    {
      type: "input",
      name: "officeNum",
      message: "Enter office phone#",
    },
    {
      type: "list",
      name: "addPosition",
      message: "Add a team member",
      choices: ["Engineer", "Intern", "Cancel"],
    },
  ])
  .then((res) => {
 

  
    if(res.addPosition === 'Engineer') {
      addEngineer();
    } else if (res.addPosition === 'Intern') {
      addIntern();
    }

    // console.log(res);
    let preparedInfo = prepareInfo(res);
    // console.log(preparedInfo);
    let fileName = `team${res.manager}.html`;
    // console.log(fileName);
    
    fs.writeFile(fileName, preparedInfo, (err) => 
    err ? console.error("There is an error") : console.log("Saved successfully")
    );
  
  })
  .catch((err) => {
    console.log('There is an error');
  })
}


//add a engineer function
let addEngineer = function() {

};

//add an intern function
let addIntern = function() {

};


let prepareInfo = function(res) {
  // return prep'ed info
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
  </head>
  <body>
      <h1>My Team</h1>
      <div>
          <div>
              <p>${res.manager}</p>
              <p>Position: Manager</p>
              <p>ID#: ${res.managerID}</p>
              <p>Email: ${res.managerEmail}</p>
              <p>Office#: ${res.officeNum}</p>
          </div>
      </div>
      
  </body>
  </html>
  `;
};

init();