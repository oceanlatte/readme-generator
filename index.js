// Packages needed for this application
const markdown = require("./src/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "projTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of this project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is needed to install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples on how to use your project:",
  },
  {
    type: "list",
    name: "licenses",
    message: "Please choose your type of license:",
    choices: [
      "No license",
      "MIT License",
      "GNU AGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
    ]
  },
  {
    type: "input",
    name: "contribution",
    message: "Please write the contribution guidelines here:",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provie tests written for your application and provide examples on how to run them:",
  },
  {
    type: "input",
    name: "questionsUserName",
    message: "Please provide your GitHub username:",
  },
  {
    type: "input",
    name: "questionsEmail",
    message:
      "Please provide your email in case the user wants to contact you for questions:",
  },
];

// Ffunction to write README file using fs.writeFile
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    // error handling if an error occurs
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log('Readme generated succesfully!');
    }
  });
}

// Function to initialize sequence for app
const init = () => {
  // promt questions then return responses
  inquirer.prompt(questions).then((questionResponse) => {
    // responses are then passed to the generate markdown script
    const responseData = markdown(questionResponse);
    // responses are used to generate readme using the write to file function
    writeToFile("./dist/README.md", responseData);
  });
};

// Function call to initialize app
init();
