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
  if (data.tableOfContents === "Yes") {
    data.tableOfContents = `## Table of Contents
    1. [Installation] (#installation) 
    2. [Usage] (#usage)
    3. [License] (#license)
    4. [Contributors] (#contributors)
    5. [Tests] (#tests)
    6. [GitHub Profile Picture] (#profilePicture)
    7. [Github Email] (#githubEmail)
    `;
  }
  return (
    `# ${data.projectTitle}\n` +
    `## Description\n ${data.description}\n\n` +
    `${data.tableOfContents}\n\n` +
    `## Installation\n` +
    "```" +
    `${data.install}` +
    "```" +
    `\n\n` +
    `## Usage\n ${data.usage} \n\n` +
    `## License\n ${data.license}\n\n` +
    `## Contributors\n ${data.contributors}\n\n` +
    `## Tests\n` +
    "```" +
    `${data.tests}` +
    "```" +
    `\n\n` +
    `## Questions\n ${data.username}\n\n`
  );
  
}

module.exports = { generateMarkdown: generateMarkdown, }; 
