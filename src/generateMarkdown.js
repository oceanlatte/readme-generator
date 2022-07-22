let badgeImg = '';
let licenseSection = '';
let licenseLink = '';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license choice here', license);
 
  if (license === 'No license') {
    return '';
  }
  else if (license === 'MIT License') {
    badgeImg = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  }
  else if (license === 'GNU AGPLv3') {
    badgeImg = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
  }
  else if (license === 'Mozilla Public License 2.0') {
    badgeImg = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
  }
  else if (license === 'Apache License 2.0') {
    badgeImg = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  }
  else if (license === 'Boost Software License 1.0') {
    badgeImg = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
  }
  else if (license === 'The Unlicense') {
    badgeImg = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No license') {
    return '';
  }
  else if (license === 'MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'GNU AGPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  }
  else if (license === 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'Boost Software License 1.0') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
  }
  else if (license === 'The Unlicense') {
    licenseLink = 'http://unlicense.org/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `## License
    This project is licensed under the [${license}](${licenseLink}) license.`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  renderLicenseBadge(data.licenses);
  renderLicenseLink(data.licenses);

  return ` # ${data.projTitle}

  ${badgeImg}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}
  
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have further quetions please contact me here:
  * [GitHub](https://github.com/${data.questionsUserName})
  * [Email](${data.questionsEmail})
`;
}

module.exports = generateMarkdown;
