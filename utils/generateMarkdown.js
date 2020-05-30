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
    `## Installation <a name ='installation'></a>\n` +
    "```" +
    `${data.install}` +
    "```" +
    `\n\n` +
    `## Usage<a name ='usage'></a>\n ${data.usage} \n\n` +
    `## License<a name ='license'></a>\n ${data.license}\n\n` +
    `## Contributors<a name ='contributors'></a>\n ${data.contributors}\n\n` +
    `## Tests<a name ='tests'></a>\n` +
    "```" +
    `${data.tests}` +
    "```" +
    `\n\n` +
    `## Questions<a name ='questions'></a>\n ${data.username}\n\n`
  );
  
}

module.exports = { generateMarkdown: generateMarkdown, }; 
