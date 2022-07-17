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
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples on how to use your project:"
    // ADD: images instructions? and question for gitHub repo name (then use template literal to insert link)
  },
  {
    type: "list",
    name: "licenses",
    choices: ["No license", "MIT License", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"],
    default: 0,
  },
  {
    type: "input",
    name: "contribution",
    message: "Please write the contribution guidelines here:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provie tests written for your application and provide examples on how to run them",
  },
  {
    type: "input",
    name: "questionsUserName",
    message: "Please provide your GitHub username."
  },
  {
    type: "input",
    name: "questionsEmail",
    message: "Please provide your email in case the user wants to contact you for questions."
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
    .then(function(questionResponse) {
      console.log(questionResponse);
      const responseData = markdown(questionResponse);
      console.log(responseData);
    })
}

// Function call to initialize app
init();
