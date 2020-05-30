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
    data.tableOfContents = "## Table of Contents\n * [Installation] (#installation)\n * [Usage] (#usage)\n * [License] (#license)\n * [Contributors] (#contributors)\n * [Tests] (#tests)\n * [Questions] (#questions)"
    ;
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
