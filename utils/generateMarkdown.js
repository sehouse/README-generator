//Badge
//Title
//Description
//Table of Contents
//Installation
//Usage
//License
//Contributing
//Tests
//Questions
//User Github profile picture
//User Github email



function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)

  ## Installation
  ${data.install} 
  
  ## Usage
  ${data.usage}
    
  ## License
  ${data.license}
    
  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.username}`
  ;
  
}

module.exports = { generateMarkdown: generateMarkdown, }; 
