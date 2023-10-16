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
  if (idList.length > 0) {
    console.log('You have already created a team');

}

  function addIntern() {
    return new Promise((resolve) => {
      console.log('add intern');

  }

  function addEngineer() {
    //prompt for engineer info
  }

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
          },
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
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        ); //console.log(`The Manager ${answers.managername} has been added!`)
        teamMembers.push(manager);
        idList.push(answers.managerId);
        createTeam();
      });
  }

  createManager();
};

appMenu();
