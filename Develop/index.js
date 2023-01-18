// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
inquirer
  .prompt([
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
      message: 'Describe your project in a sentence or two.',
      name: 'description',
    },
    {
      type: 'checkbox',
      choices: ['MIT','etc','letter'],
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
  ])
  .then((data) => {
    console.log(data);
    console.info("Generating README...")
    writeToFile();
  });


// TODO: Create a function to write README file
function writeToFile(readMe, data) {
    return fs.writeFileSync(path.join(process.cwd(),readMe),data)
    };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile('READ-ME-GENERATED.md',generateMarkdown({...inquirerResponses}));
  });
  }
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

// Function call to initialize app
init();
