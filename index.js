const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: 'Description?',
    },
    {
      type: 'input',
      name: 'toc',
      message: 'Table of Contents?',
    },
    
    {
      type: 'input',
      name: 'installation',
      message: 'Installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License?',
      choices: ['MIT', 'GPL', 'Apache 2.0']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions',
    },

])

// Generate README content from user's answers
  .then((answers) => {
    const readmeContent = `
# Description: 
${answers.description}
# Table of Contents: 
${answers.toc} 
# installation:
${answers.installation}
# Usage:
${answers.usage}
# License:
${answers.license}
# Contributing:
${answers.contributing}
# Test:
${answers.test}
# Questions:
${answers.questions}

`;


    // Write the README file
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('README generated!')
  );
  }).then(()=>{

  });



// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');

// // const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Description?',
//     },
//     {
//       type: 'input',
//       name: 'toc',
//       message: 'Table of Contents?',
//     },
    
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'Installation',
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Usage',
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'License?',
//       choices: ['MIT', 'GPL', 'Apache 2.0']
//     },
//     {
//       type: 'input',
//       name: 'contributing',
//       message: 'Contributing',
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'Tests',
//     },
//     {
//       type: 'input',
//       name: 'questions',
//       message: 'Questions',
//     },
//   ]);

// const generateHTML = (answers) =>











// promptUser()
//   .then((answers) => writeFileAsync('README.md', generateHTML(answers)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));

//   fs.writeFile('README.md', readmeContents, err => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('README.md file created!');
//     }
//   });
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4"> # ${answers.description}</h1>
//     <p> ${answers.toc}</p>
//     <h3> ## How to install?</h3>
//     <p> * ${answers.installation}</p>
//     <h3> ## Usage</h3>
//     <p> * ${answers.usage}</p>
//     <h3> ## License </h3>
//     <p> ${answers.license} </p>
//     <h3> ## Contributing: </h3>
//     <p> * ${answers.contributing} </p>
//     <h3> ## Tests: </h3>
//     <p> * ${answers.tests} </p>
//     <h3> ## Questions: </h3>
//     <p> * ${answers.questions} </p>
//     <p>![Kiku](put your image file name here)</p>
//   </div>
// </div>
// </body>
// </html>`;
