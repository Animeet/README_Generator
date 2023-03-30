// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ** ${data.title} **

  ## **Description**
  - ${data.description}
  - ${data.problem}
  - ${data.learn}


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Testing](#testing)
  5. [License](#license)
  6. [Questions](#questions)

  ---

  ## ** Installation **
  > ${data.install}

  ---

  ## ** Usage Information **
  ${data.usage}


  ---
  
  ## ** Contribution **
  ${data.usage}


  ---

  ## ** Testing **
  ${data.test}


  ---

  ## ** License **
  License: ${data.license}

  For more information on the license above, please go to [https://www.choosealicense.com/](https://www.choosealicense.com/).

  ---

  ## ** Questions **
  If you have any questions about this repository, please contact me directly at [${data.email}](mailto:${data.email}).
  You can find this repository, and others I have worked on at [${data.username}](https://www.github.com/${data.username}).
`;
}

module.exports = generateMarkdown;


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
