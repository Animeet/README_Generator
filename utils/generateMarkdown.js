// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'APACHE') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  }
  if (license === 'APACHE') {
    return '[APACHE](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'BSD') {
    return '[BD](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }

  return ` ## **License**
  License: ${license}

  For more information on the license above, please go to [https://www.choosealicense.com/](https://www.choosealicense.com/).

  ---`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

  ## **Description**
  - ${data.description}
  - ${data.problem}
  - ${data.learn}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ---

  ## **Installation**
  ${data.install}

  ---

  ## **Usage Information**
  ${data.usage}


  ---
  
  ## **Contribution**
  ${data.usage}


  ---

  ## **Testing**
  ${data.test}


  ---

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## **Questions**
  If you have any questions about this repository, please contact me directly at [${data.email}](mailto:${data.email}).
  You can find this repository, and others I have worked on at [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown;


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
