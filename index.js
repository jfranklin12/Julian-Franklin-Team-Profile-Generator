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
            team.push(manager);
            

            if (manRes.memberType === `Engineer`) {
                addEngineer();
            } else if (manRes.memberType === `Intern`) {
                addIntern();
            } else if (manRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!');
                console.log(team);
                buildTeam();
            };
        });
};


function addEngineer() {
    inquirer
        .prompt(engineer).then(engRes => {
            const engineer = new Engineer(engRes.engName, engRes.engId, engRes.engEmail, engRes.engGithub);
            console.log(engineer);
            team.push(engineer);

            if (engRes.memberType === `Engineer`) {
                addEngineer();
            } else if (engRes.memberType === `Intern`) {
                addIntern();
            } else if (engRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!');
                console.log(team);
                buildTeam();
            };
        });
};

function addIntern() {
    inquirer
        .prompt(intern).then(intRes => {
            const intern = new Intern(intRes.intName, intRes.intId, intRes.intEmail, intRes.intSchool);
            console.log(intern);
            team.push(intern);

            if (intRes.memberType === `Engineer`) {
                addEngineer();
            } else if (intRes.memberType === `Intern`) {
                addIntern();
            } else if (intRes.memberType === `I don't want to want to add any more team members`) {
                console.log('We built our dream team!');
                console.log(team);
                buildTeam();
            };
        });
}

function manCard(manager) {
    return `            
    <div class="col mb-4">
        <div class="card h-100">
            <div class="card-header">
                <h4 class="card-title">${manager.name}</h4>
                <h5 class="card-title">🍵 Manager</h5>
            </div>
            <div class="card-body text-primary">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email:<a mailto='${manager.email}'>${manager.email}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
};

function empCards(employee) {
    switch (employee.getRole()) {
        case 'Engineer':
            return `
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h4 class="card-title">${employee.name}</h4>
                        <h5 class="card-title">💻Engineer</h5>
                    </div>
                    <div class="card-body text-primary">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a mailto='${employee.email}'>${employee.email}</a></li>
                                <li class="list-group-item">Github: <a href='https://github.com/${employee.github}'>${employee.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;

        case 'Intern':
            return `
            <div class="col mb-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h4 class="card-title">${employee.name}</h4>
                        <h5 class="card-title">🎓 Intern</h5>
                    </div>
                <div class="card-body text-primary">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a mailto='${employee.email}'>${employee.email}</a></li>
                            <li class="list-group-item">School: ${employee.school}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }
}

function buildTeam() {
    const bHtml = `
    <!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Quattrocento:wght@400;700&display=swap"
                rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
            <title>The Dream Team</title>
        </head>
    
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 title">The Dream Team</h1>
                    <p class="lead">Who's on your dream team?</p>
                </div>
            </div>
    
    
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3">`
    let managerCard = manCard(team[0]);
    let employeeCards = '';
    for(let i = 1; i < team.length; i++) {
        let card = empCards(team[i]);
        employeeCards += card;
    }

    const eHtml = `
        </div>
            </div>

    </body>

    </html>`
    
const finalHtml = bHtml + managerCard + employeeCards + eHtml;

fs.writeFile('./dist/index.html', finalHtml, (err) => {
    if(err){
        console.log("Oh no! Something went wrong!")
    }else{
        console.log("Wow! We built the team!")
    }
})
}


addManager();

