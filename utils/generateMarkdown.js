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
    data.tableOfContents = "## Table of Contents\n" +
    "1. [Installation] (#installation)\n" +
    "2. [Usage] (#usage)\n" +
    "3. [License] (#license)\n" +
    "4. [Contributors] (#contributors)\n" +
    "5. [Tests] (#tests)\n" +
    "6. [Questions] (#questions)"
    ;
  }
  return (
    `# ${data.projectTitle}\n` +
    `## Description\n ${data.description}\n\n` +
    `${data.tableOfContents}\n\n` +
    `<a name="installation"></a>## Installation\n` +
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
