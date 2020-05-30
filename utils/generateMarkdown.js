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
# ${data.title}

`;
}

module.exports = generateMarkdown;
