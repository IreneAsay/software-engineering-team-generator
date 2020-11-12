# Software Engineering Team Generator

## Project Description 
The goal of this project is to create a command-line application (a software engineering team generator) that will prompt the user for different types of role to be added to the team followed by specific information pertaining to that role. The user can input any number of team members, and they may be a mix of engineers, interns and a manager. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

![Screenshot] (assets/screenshot.png)

## Table of Content

  - [Project Description](#project-description)
  - [User Story](#user-story)
  - [Criteria](#criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)

## User Story
As a manager
I want to generate a webpage that displays my team's basic information
so that I have quick access to emails and GitHub profiles


## Criteria

This app was built under the following requirements:

* Functional application.
* GitHub repository with a unique name and a README describing the project.
* User can use the CLI to generate an HTML page that displays information about their team.
* All tests must pass.


## Installation

This application was designed to work with [Node.js](https://nodejs.org/en/). For the application to run properly, please also run `npm install` to install all modules listed as dependencies in `package.json` before invoking the application. Finally, run `npm install inquirer` to prompt the user for their email, id, and specific information based on their role with the company. 


## Usage

The application will be invoked by the command `node app.js`. Once the application is running, you will see a series of questions prompted by the `Inquirer.js`. Answer each question accordingly. For instance, an intern is asked to provide a school name, whereas an engineer is asked to provide GitHub username. The user can decide whether to add more team members by responding *y* or *N* to end the process of adding more team members. The final `team.html` is generated under the *output* folder.


## Questions
For your reference, here is a [demo video](https://drive.google.com/file/d/17fM5yKZYT_INYx0Dq_b9nLTNhHukrSPL/view) to walk through the entire process of running this app.

More questions? Connect with me and we can chat more!

Github: <a href="https://github.com/IreneAsay" target="_blank">IreneAsay</a> 

Email Address: irene.hsu.asay@gmail.com


## License

© Irene Asay. All Rights Reserved. Under the [MIT/](./LICENSE) license.