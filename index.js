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
