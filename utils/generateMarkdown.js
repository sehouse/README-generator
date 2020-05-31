const axios = require('axios');

//Function to generate the ReadMe.
async function generateMarkdown(data) {

  //API call to get the GitHub user information for the photo and contact email.
  const gitAPI = await axios.get(`https://api.github.com/users/${data.username}`);

  //Function to determine if the user said 'yes' to adding a table of contents.
  if (data.tableOfContents === "Yes") {
    data.tableOfContents = "## Table of Contents\n" +
    "1. [Installation](#installation)\n" +
    "2. [Usage](#usage)\n" +
    "3. [License](#license)\n" +
    "4. [Contributors](#contributors)\n" +
    "5. [Tests](#tests)\n" +
    "6. [Questions](#questions)\n\n"
    ;
  } else {
    data.tableOfContents = "";
  }
  return (
    
    //Project title
    `# ${data.projectTitle}\n\n` +

    //Badges
    `[![Github license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)](#license)` +
    `[![Contributors](https://img.shields.io/static/v1?label=License&message=${data.contributors}&color=yellow)](#contributors)\n\n` +

    //Project Description
    `## Description\n ${data.description}\n\n` +

    //Table of Contents (if desired)
    `${data.tableOfContents}` +

    //Installation
    `## Installation\n` +
    `To install the depedencies necessary for this to function, run this command:\n` +
    "```" +
    `${data.install}` +
    "```" +
    `\n\n` +

    //Usage
    `## Usage\n ${data.usage} \n\n` +

    //License
    `## License\n` +
    `This project is licensed under the ${data.license} license.\n\n` +

    //Contributors
    `## Contributors\n` +
    `The contributor(s) to this project is/are:\n` +
    `${data.contributors}\n\n` +

    //Tests
    `## Tests\n` +
    `To test this project, run this command:\n` +
    "```" +
    `${data.tests}` +
    "```" +
    `\n\n` +

    //Questions and Contact
    `## Questions\n` +
    `<img src="${gitAPI.data.avatar_url}">\n"` +
    `If you have questions about this project, feel free to contact [${gitAPI.data.email}](${gitAPI.data.email}) and visit their [GitHub account](https://github.com/${data.username})\n\n`

  ); 
}

module.exports = { generateMarkdown: generateMarkdown, }; 
