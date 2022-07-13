// TODO: Include packages needed for this application
const markdown = require("./src/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projTitle",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of this project?"
  },
  {
    type: "input",
    name: "installation",
    message: "What is needed to install this project?"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(questionResponse) {
      console.log(questionResponse);
      const responseData = markdown(questionResponse);
      console.log(responseData);
    })
}

// Function call to initialize app
init();
