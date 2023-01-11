// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    // Description
    //Table of Contents
    // Installation
    // Usage
    // License
    // Contributing
    // Tests
    // Questions
];

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Describe your project in a sentence or two.',
      name: 'description',
    },
    {
      type: 'input',
      message: "What are te=he instructions for installation?",
      name: 'installation',
    },
    {
      type: 'checkbox',
      choices: ['MIT','etc','letter'],
      message: 'What license?',
      name: 'license',
    },
    {
        type: 'input',
        message: 'Who besdies you contributed to this project? If not, please enter "N/A".',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests need to be run?',
        name: 'tests',
    },
  ])
  .then((data) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
