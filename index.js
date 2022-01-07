const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');



// Array of questions for user input
const questions = [
    "What is your name?",
    "Enter your project title: ",
    "Describe your project: ",
    "How does the user install your project?",
    "Describe how your project is used: ",
    "Instructions for contributing: ",
    "Command to test: ",
    "Choose a license: ",
    "Enter your github username: ",
    "Enter your email address: "
];




//Function to initialize app
function init() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'name',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'title',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'usage',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contributing',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'tests',
    },
    {
        type: 'list',
        message: questions[7],
        name: 'license',
        choices: ['Apache 2.0','Boost','BSD 3','BSD 2','None']
    },
    {
        type: 'input',
        message: questions[8],
        name: 'githubUser',
    },
    {
        type: 'input',
        message: questions[9],
        name: 'email',
    }
    ])
    .then((data) => {        
        fs.writeFile('team.html', generateMarkdown(data), (err) => {
            err ? console.error(err) : console.log('Success!');
        });
    });
}

// Function call to initialize app
init();
