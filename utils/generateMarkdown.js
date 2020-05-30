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
    `## Table of Contents\n` +
    `* [Installation] (#installation)\n` +
    `## <a name ="installation"></a>Installation\n` +
    "```" +
    `${data.install}` +
    "```" +
    `\n\n` +
    `## <a name ="usage"></a>Usage\n ${data.usage} \n\n` +
    `## <a name ="license"></a>License\n ${data.license}\n\n` +
    `## <a name ="contributors"></a>Contributors\n ${data.contributors}\n\n` +
    `## <a name ="tests"></a>Tests\n` +
    "```" +
    `${data.tests}` +
    "```" +
    `\n\n` +
    `## <a name ="installation"></a>Questions\n ${data.username}\n\n`
  );
  
}

module.exports = { generateMarkdown: generateMarkdown, }; 
