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
        type: "list",
        name: "install",
        message: "Did you install any dependencies?",
        choices: ["Yes", "No"],
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
        type: 'list',
        name: 'tests',
        message: 'Do you have any tests?',
        choices: [
            'Yes',
            'No'
        ]
    },

    //Github username
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },

    //Github profile picture?
    {
        type: 'list',
        name: 'userPic',
        message: 'Would you like to include your GitHub profile picture?',
        choices: [
            'Yes',
            'No'
        ]
    },

    //Github email
    {
        type: 'list',
        name: 'email',
        message: 'Would you like to include your GitHub user email?',
        choices: [
            'Yes',
            'No'
        ]
    }
];

function writeToFile(fileName, data) {
    //What destination for the file?
    //Need to create a file with the name fileName
    //Write to this fileName the data
}

function init() {
    //Initialize the things that I need here
}

init();
