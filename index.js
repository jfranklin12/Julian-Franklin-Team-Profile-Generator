const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function addManager() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'manName',
        message: `What is your team manager's name?`,
    },
    {
        type: 'input',
        name: 'manId',
        message: `What is your team manager's id?`,
    },
    {
        type: 'input',
        name: 'manEmail',
        message: `What is your team manager's email?`,
    },
    {
        type: 'input',
        name: 'manOffNum',
        message: `What is your team manager's office number?`,
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
    ]);
};

function addEngineer() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'engName',
        message: `What is your engineer's name?`,
    },
    {
        type: 'input',
        name: 'engId',
        message: `What is your engineer's id?`,
    },
    {
        type: 'input',
        name: 'engEmail',
        message: `What is your engineer's email?`,
    },
    {
        type: 'input',
        name: 'engGithub',
        message: `What is your engineer's email?`,
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
])
};

function addIntern() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'intName',
        message: `What is your intern's name?`,
    },
    {
        type: 'input',
        name: 'intId',
        message: `What is your intern's id?`,
    },
    {
        type: 'input',
        name: 'intEmail',
        message: `What is your intern's email?`,
    },
    {
        type: 'input',
        name: 'intSchool',
        message: `What is your intern's school?`,
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
])
};

addManager();
addEngineer();
addIntern();