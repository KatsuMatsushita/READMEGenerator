// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Please enter the Project Title: ",
        type: "input"
    },
    {
        name: "license",
        message: "Please choose the license: ",
        type: "list",
        choices: ["ISC", "MIT", "Creative Commons", "GPL Version 3", "None"]
    },
    {
        name: "desc",
        message: "Please enter a one-line description of the project: ",
        type: "input"
    },
    {
        name: "install",
        message: "Please write out the installation instructions: ",
        type: "editor"
    },
    {
        name: "usage",
        message: "Please provide instructions on how the application is to be used: ",
        type: "editor"
    },
    {
        name: "test",
        message: "Please provide instructions on how to test the application: ",
        type: "editor"
    },
    {
        name: "contribution",
        message: "Please provide contribution guidelines: ",
        type: "editor"
    },
    {
        name: "username",
        message: "Please enter your GitHub username: ",
        type: "input"
    },
    {
        name: "email",
        message: "Please enter your email address: ",
        type: "input"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // this passes the data object (the answers from the inquirer prompt) to the function to generate the markdown file
    fs.writeFile(`./results/${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README File has been generated.")
    );
}

// TODO: Create a function to initialize app
function init() {
    // start inquirer prompts to get answers from the user
    inquirer.prompt(questions)
    .then((answer) => {
        writeToFile("README", answer);
    });
}

// Function call to initialize app
init();
