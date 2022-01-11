const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./util/generateMarkdown.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const path =require('path'); 
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

let role = 'Manager';
let teamCards = [];

//Function to initialize app
function init() {  
    if (role === 'Manager') {
        inquirer
        .prompt([   
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'role',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
        ])
        .then((data) => {   
            role = data.role;
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);    
            teamCards.push(manager);
            init();
        });
    }
    else if (role === 'Engineer') {
        inquirer
        .prompt([   
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
        },
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'role',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
        ])
        .then((data) => {   
            role = data.role;
            const engineer = new Engineer(data.name, data.id, data.email, data.github);     
            teamCards.push(engineer);
            init();
        });
    }
    else if (role === 'Intern') {
        inquirer
        .prompt([   
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'school',
        },
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'role',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
        ])
        .then((data) => {   
            role = data.role;
            const intern = new Intern(data.name, data.id, data.email, data.school);     
            teamCards.push(intern);
            init();
        });  
    }
    else{
        console.log("generating team html page ..."); 
        fs.writeFile(distPath, generateMarkdown(teamCards), (err) => {
            err ? console.error(err) : console.log('Success!');
        });
    }
}

// Function call to initialize app
init();