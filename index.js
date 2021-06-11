// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
//"Description:", "Instilation Instructions:", "Usage Information:", "Contribtion Guidelines", "Test Instructions:"
const questions = [
    {
       type: 'input',
       message: 'Description:',
       name: 'descrition',
},

{
    type: 'input',
    message: 'Instalation Instructions:',
    name: 'instillation',
},

{
    type: 'input',
    message: 'Usage Information:',
    name: 'usage',
},

{
    type: 'input',
    message: 'Contibution Guidelines:',
    name: 'contibution',
},

{
    type: 'input',
    message: 'Test Instructions:',
    name: 'test',
}

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    return fs.writeFile(fileName, data);
    
}

function init() {
    inquirer.prompt(questions).then(data =>{
        writeToFile("readme.md", data);
        console.log(data);
        } 
        );

}

// Function call to initialize app
init();
