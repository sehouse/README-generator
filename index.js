const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions to user 
const questions = [

    //What is your project title?
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
    },

    //What is you description?
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },

    //What is your table of contents?
    {
        type: "list",
        name: "tableOfContents",
        message: "Would you like a Table of Contents?",
        choices: ["Yes", "No"],
    },

    //How to install:
    {
        type: "input",
        name: "install",
        message: "How do you install your dependencies?",

    },

    //What is your usage?
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage?'
    },

    //What is your license?
    {
        type: "input",
        name: "license",
        message: "What did you use for a license?",
    },

    //Who are the contributors?
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },

    //What are your tests?
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
    },

    //Github username
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username, so that you can be contacted for user questions?'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("File Successfully Written!")
        };
    });
}

function init() {
    //Initialize the things that I need here
    inquirer.prompt(questions).then(async data => {
        let markdown = await generateMarkdown.generateMarkdown(data);
        writeToFile('README.md', markdown);
    });
}

init();