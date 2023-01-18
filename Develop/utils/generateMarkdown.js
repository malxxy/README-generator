// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if license, return license;
  // if no license, return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if license, return license link;
  // if no license, return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   // if license, render license button & link;
  // if no license, return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br>

  ## Description
  ${data.description}
  <br>
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  <br>
  
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installation}
  <br>
  
  ## Usage
  ${data.usage}
  <br>
  
  ## License
  This is a project under the ${data.license} license.
  <br>
  
  ## Contributing
  ${data.contributors}
  <br>

  ## Tests
  To run tests, run the following commands
  ${data.tests}
  <br>
  
  ## Questions
  If you have any questions about the repo or project, please contact me directly at ${data.email}.
`;
}

module.exports = generateMarkdown;