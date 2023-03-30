// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    // Description Section
    {
        type: "input",
        message: "Provide a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What problem does your project solve?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn from this project?",
        name: "learn"
    },
    // Installation Section
    {
        type: "input",
        message: "What command should be ran to install dependencies?",
        name: "install"
    },
    // Usage Section
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    // Contribution Section
    {
        type: "input",
        message: "What does the user need to know about contributing to the project?",
        name: "contribute"
    },
    // Test Instructions Section
    {
        type: "input",
        message: "What command should be ran to test the project?",
        name: "test"
    },

    //License Section
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "None"
        ]
    },
    //Questions Section
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub Email?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var content = generateMarkdown(data);
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }
        console.log('success');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
