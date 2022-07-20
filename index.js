const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

const manager = [
    {
        type: 'input',
        name: 'manName',
        message: `What is your team manager's name?`,
        default: `Nick`
    },
    {
        type: 'input',
        name: 'manId',
        message: `What is your team manager's id?`,
        default: `6969`
    },
    {
        type: 'input',
        name: 'manEmail',
        message: `What is your team manager's email?`,
        default: `nick@yahoo.com`
    },
    {
        type: 'input',
        name: 'manOffNum',
        message: `What is your team manager's office number?`,
        default: `1`
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
]

const engineer = [
    {
        type: 'input',
        name: 'engName',
        message: `What is your engineer's name?`,
        default: `Jules`
    },
    {
        type: 'input',
        name: 'engId',
        message: `What is your engineer's id?`,
        default: `421`
    },
    {
        type: 'input',
        name: 'engEmail',
        message: `What is your engineer's email?`,
        default: `jules@gmail.com`
    },
    {
        type: 'input',
        name: 'engGithub',
        message: `What is your engineer's github?`,
        default: `jfranks`
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
]

const intern = [
    {
        type: 'input',
        name: 'intName',
        message: `What is your intern's name?`,
        default: `Lee`
    },
    {
        type: 'input',
        name: 'intId',
        message: `What is your intern's id?`,
        default: `864`
    },
    {
        type: 'input',
        name: 'intEmail',
        message: `What is your intern's email?`,
        default: `lee@aol.com`
    },
    {
        type: 'input',
        name: 'intSchool',
        message: `What is your intern's school?`,
        default: `Georgia Tech`
    },
    {
        type: 'list',
        name: 'memberType',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to want to add any more team members`],
    },
]

function addManager() {
    inquirer
    .prompt(manager).then(manRes => {
            const manager = new Manager(manRes.manName, manRes.manId, manRes.manEmail, manRes.manOffNum);
            console.log(manager);

            if (manRes.memberType === `Engineer`) {
                addEngineer();
            } else if (manRes.memberType === `Intern`) {
                addIntern();
            } else if (manRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!')
            };
        });
};


function addEngineer() {
    inquirer
        .prompt(engineer).then(engRes => {
            const engineer = new Engineer(engRes.engName, engRes.engId, engRes.engEmail, engRes.engGithub);
            console.log(engineer);

            if (engRes.memberType === `Engineer`) {
                addEngineer();
            } else if (engRes.memberType === `Intern`) {
                addIntern();
            } else if (engRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!')
            };
        });
};

function addIntern() {
    inquirer
        .prompt(intern).then(intRes => {
            const intern = new Intern(intRes.intName, intRes.intId, intRes.intEmail, intRes.intSchool);
            console.log(intern);

            if (intRes.memberType === `Engineer`) {
                addEngineer();
            } else if (intRes.memberType === `Intern`) {
                addIntern();
            } else if (intRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!')
            };
        });
}

addManager();