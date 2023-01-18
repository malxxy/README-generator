// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Describe your project in a sentence or two.',
    name: 'description',
  },
  {
    type: 'list',
    choices: ['MIT','GNU','APACHE'],
    message: 'What kind of license should your project have?',
    name: 'license',
    default: "MIT",
  },
  {
    type: 'input',
    message: "What command should be run to install dependencies?",
    name: 'installation',
    default: 'npm i',
  },
  {
    type: 'input',
    message: "What command should be run to run tests?",
    name: 'tests',
    default: 'npm test',
  },
  {
    type: 'input',
    message: "What does the user need to know about using the repo?",
    name: 'usage',
  },
  {
      type: 'input',
      message: 'Who besides you contributed to this project? If not, please enter "N/A".',
      name: 'contributors',
      default: 'N/A',
  }
]


// TODO: Create a function to write README file
function writeToFile(readMe, data) {
    return fs.writeFileSync(path.join(process.cwd(),readMe),data)
    };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('READ-ME-GENERATED.md',generateMarkdown(inquirerResponses));
  });
  }

// Function call to initialize app
init(); // does not run until we tell it to, instead of having in global scope
// end of file so that everything is loaded in first