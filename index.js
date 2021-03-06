//get modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { inherits } = require('util');

//team arr contain object of all members
let team = [];

// Add a manager to create team
let newManager = function() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "Enter manager's ID#",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter manager's Email",
    },
    {
      type: "input",
      name: "officeNum",
      message: "Enter manager's office#",
    },
  ])
  .then((res) => {
    // console.log(res);
    team.push(new Manager(res.managerName, res.managerID, res.managerEmail, res.officeNum))
    // console.log(team);
    nextEmployee();
  })
  .catch((err) => {
    console.log('There is an error');
  })
}

let nextEmployee = function() {
  inquirer
  .prompt([
    {
      type: "list",
      name: "addPosition",
      message: "Add a team member",
      choices: ["Engineer", "Intern", "Cancel"],
    },
  ])
  .then((res)=> {
    if(res.addPosition === 'Engineer') {
      addEngineer();
     } else if (res.addPosition === 'Intern') {
       addIntern();
     } else if (res.addPosition === 'Cancel') {
      //  console.log(team);
       renderHTML(team);
     }
  })
  .catch((err) => {
    console.log('There is an error');
  })
}

 //add a engineer function
let addEngineer = function() {
  inquirer
  .prompt([
  {
    type: "input",
    name: "engineerName",
    message: "Enter engineer's name",
  },
  {
    type: "input",
    name: "engineerID",
    message: "Enter engineer's ID#",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter engineer's email",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter engineer's Github username",
  },
  ])
  .then((res) => {
    team.push(new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGithub));
    // console.log(team);
    nextEmployee();
  
  })
  .catch((err) => {
  console.log('There is an error');
  })
};

//add an intern function
let addIntern = function() {
  inquirer
  .prompt([
  {
    type: "input",
    name: "internName",
    message: "Enter intern's name",
  },
  {
    type: "input",
    name: "internID",
    message: "Enter intern's ID#",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter intern's email",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter intern's school name",
  },
  ])
  .then((res)=> {
    team.push(new Intern(res.internName, res.internID, res.internEmail, res.internSchool))
    // console.log(team);
    nextEmployee();
  })
  .catch((err) => {
    console.log('There is an error');
    })
};




//write new html file with data array being team
let renderHTML = function (arr) {
  console.log("renderHTML: ", arr);

  fs.writeFile('dist/index.html', prepareInfo(arr), (err) => 
    err ? console.error("Unable to writeFile") : console.log("Saved successfully")
  );

}



//prepare data
// make empty string to keep cards
// add info to cards string


let prepareInfo = function(arr) {

  let cards = "";

  arr.forEach(object => {
    let line = "";
  
    for (const property in object) {

      if (property === "name") {
        line += `<p class="card-title bg-primary p-1 text-white text-capitalize">${object[property]}</p>`;
      } else if (property === "github") {
        line += `<p class="bg-light text-capitalize">github: <a target="#" href="https://github.com/${object["github"]}">${object["github"]}</a></p>`;
      } else if (property === "email") {
        line += `<p class="bg-light ">Email: <a href = "mailto: ${object["email"]}">${object["email"]}</a></p>`;
      } else {
        line += `<p class="card-text text-capitalize bg-light">${property}: ${object[property]}</p>`;
      }

    }
    let card = '<div class="card col-3 mx-2 my-5 p-2 display-5">'+ line + '</div>';
    cards += card;
  });

  // return prep'ed data
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
  
  
      <!-- Bootstrap Link -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  
  
  </head>
  <body>
      <div class="container" id="team">
          <div class="row">
              <div class="col-12 text-center bg-primary my-2 py-4 display-4 flex-wrap text-white">My Team</div>
          </div>
          <div class="row d-flex justify-content-around" id="cards">
            ${cards}
          </div>
      </div>
  
  

      <!-- Bootstrap -->
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
  </body>
  </html>
  `;
}


//start application
newManager();