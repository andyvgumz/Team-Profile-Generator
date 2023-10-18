const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const idList = [];
const teamMembers = [];

const appMenu = () => {
function buildTeam() { 
    // console.log('You have already created a team');
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)      
    }
    fs.writeFileSync(outputPath, render(teamMembers), 'utf8');
}}

  function addIntern() {
    inquirer.prompt([
      {type: "input",
          name: "internName",
          message: "What is the name of your intern?"     
      
      },  
  
      {type: "input",
      name: "internId",
      message: "What is the intern id?"  
  
  },  
  
  {type: "input",
  name: "internEmail",
  message: "What is the intern email?"     
  }, 
  
  {type: "input",
  name: "internGithub",
  message: "What is the intern github?" 
  }  

  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
    teamMembers.push(intern);
    idList.push(answers.internId);
    // console.log(intern);
    createTeam()
  })
}

  function addEngineer() {
    //prompt for engineer info
    inquirer.prompt([
    {type: "input",
        name: "engineerName",
        message: "What is the name of your engineer?"    
    },  

    {type: "input",
    name: "engineerId",
    message: "What is the engineer id?"   
},  

{type: "input",
name: "engineerEmail",
message: "What is the engineer email?"     

}, 

{type: "input",
name: "engineerGithub",
message: "What is the engineer github?" 
}    
]).then(answers => {
  const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
  teamMembers.push(engineer);
  idList.push(answers.engineerId);
  // console.log(engineer);
  createTeam()
})

  function createTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Select a role for your new employee.",
        choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore team members"],
      }]).then(userChoice => {
        if (userChoice.role === 'Manager') {
          managerPrompts();
          } else if (userChoice.role ==="Engineer") {
            //add engineer function
            engineerPrompts();
            }  else if (userChoice.role==="Intern"){
                //add intern function
              internPrompts();
              }else {
                //build team function
                renderHTML();
                };
      })
  }

  //create HTML file with all employees and their info
  function createManager() {
    console.log("Please build your team!");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
        },
        {
          type: "input",
          name: "manager Id",
          message: "Enter the manager's ID number.",
        },

        {
          type: "input",
          name: "manageremail",
          message: "Enter the manager's email address.",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "what is the manager's office number.",
        },

      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        // console.log(manager);
        teamMembers.push(manager);  //console.log(`The Manager ${answers.managername} has been added!`)
        idList.push(answers.managerId);
        createTeam();       
      });     
  }  
  createManager();



}

appMenu();

