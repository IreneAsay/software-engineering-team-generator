const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];
let manager, engineer, intern;

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is this Manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this Manager's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is this Manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is this Manager's office number?",
                name: "officeNumber",
            },
        ])
        .then((response) => {
            manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNumber
            );
            employees.push(manager);
            askAddEmployee();
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is this engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this engineer's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is this engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is this engineer's GitHub username?",
                name: "github",
            },
        ])
        .then((response) => {
            engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
            );
            employees.push(engineer);
            askAddEmployee();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is this intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is this intern's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is this intern's email address?",
                name: "email",
            },
            {
                type: "input",
                message:
                    "Which school is this intern attending or what was the last school this intern attended?",
                name: "school",
            },
        ])
        .then((response) => {
            intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
            );
            employees.push(intern);
            askAddEmployee();
        });
}

function askQuestions() {
    inquirer.prompt(
        [
            {
                type: "list",
                message: "What type of role are you adding to the team?",
                name: "selection",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ]
    )
        .then((response) => {
            switch (response.selection) {
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;
            }
        });
}
askQuestions();

function askAddEmployee() {
    inquirer.prompt(
        [
            {
                type: "confirm",
                message: "Would you like to add another employee?",
                name: "add",
                default: false
            }
        ]
    )
        .then((response) => {
            if (response.add) {
                askQuestions();
            } else {
                fs.writeFile(
                    "./output/team.html",
                    render(employees),
                    "utf-8",
                    (err) => {
                        err ? console.log(err) : console.log("success");
                    }
                );
            }
        });
}
