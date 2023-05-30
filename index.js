const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  // Add your questions here
];

// TODO: Create a function to generate the content for the README file
function generateReadmeContent(answers) {
  // Generate the README content here
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file created successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content using the answers
    const readmeContent = generateReadmeContent(answers);

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();

// TODO: Create a function to initialize app
function init() {
  // TODO: Create a function to generate the content for the README file
  function generateReadmeContent(answers) {
    const title = 'READMECHALLENGE';
    const description = 'This is a command-line application that dynamically generates a professional README.md file from user input. It utilizes the Inquirer package to prompt users with questions and generates a high-quality README file based on their answers.';
    const installation = 'To install this application you would open the terminal and run npm install ';
    const usage = 'The usage for this application is to dynamically generate a professional README.md file based on user input. ';
    const license = answers.license || 'None';
    const githubUsername = 'https://github.com/JoshuaBFisher1';
    const email = 'JoshuaFisher919@yahoo.com';
    const { contributing, tests } = answers;

    const readmeContent = `
# ${title}

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
To contribute to this project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## Tests
${tests ? tests : 'No tests available.'}

## Questions
If you have any questions or would like to contribute, please feel free to reach out.

GitHub: [${githubUsername}](https://github.com/${githubUsername})

Email: ${email}
`;

    return readmeContent;
  }

  inquirer.prompt(questions).then((answers) => {
    // Generate the README content using the answers
    const readmeContent = generateReadmeContent(answers);

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();

// TODO: Create an array of questions for user input
const Questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    // Add more questions as needed
  ];