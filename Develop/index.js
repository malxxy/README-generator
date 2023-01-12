// TODO: Include packages needed for this application
// 
const inquirer = require('inquirer');
const fs = require('fs');


// Description
//Table of Contents
// Installation
// License
// Contributing
// Tests
// DOUBLE CHECK OTHERS

// Array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Describe your project in a sentence or two.',
      name: 'description',
    },
    {
      type: 'input',
      message: "What are the instructions for installation?",
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
    console.log(data),
    // writeToFile(),
    // init()
  );


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('readMeGenerated.md', data, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    };

// TODO: Create a function to initialize app
function init() {
    // paste readme file syntax in here
    // `# Title n\
    // ${title} n\
    // ## Description n\
    // ${description} n\
    // <br> n\
    // ## Table of Contents n\
    // ${tableOfCont} n\
    // <br> n\
    // ## License n\
    // ${license} n\
    // <br> n\
    // ## Contributors n\
    // ${Contributors} n\
    // <br> n\
    // ## Tests n\
    // ${tests} <br>`
};

// Function call to initialize app
init();
