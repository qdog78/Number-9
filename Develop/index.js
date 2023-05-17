// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the project description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'Other'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('An error occurred while saving the README file:', err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { title, description, installation, usage, contributing, tests, license, githubUsername, email } = answers;

    // Generate the README content
    const readmeContent = `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, you can reach out to me via GitHub or email:
- GitHub: [${githubUsername}](https://github.com/${githubUsername})
- Email: ${email}`;

    // Save the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
