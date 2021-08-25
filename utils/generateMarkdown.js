// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // badges copied from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch (license) {
    case "CC0":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default:
      return ""; 
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "CC0":
      //code block
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // license descriptions copied from https://choosealicense.com/licenses/
  switch (license) {
    case "CC0":
      //CC0 license description copied from https://creativecommons.org/publicdomain/zero/1.0/
      return "The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.";
    case "GPLv3":
      return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
    case "MIT":
      return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
    case "ISC":
      //ISC license description copied from https://opensource.org/licenses/ISC
      return `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
    default:
      return "";
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
1. [Description](#description)
2. [Installation Instructions](#install)
3. [Usage](#usage)
4. [Test Instructions](#test)
5. [Contribution Guidelines](#contribution)
6. [License](#license)
7. [Questions](#questions)

## Description <a name="description"></a>
${data.desc}

## Installation Instructions <a name="install"></a>
${data.install}

## Usage <a name="usage"></a>
${data.usage}

## Test Instructions <a name="test"></a>
${data.test}

## Contribution Guidelines <a name="contribution"></a>
${data.contribution}

## License <a name="license"></a>
${data.license} ${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Questions <a name="questions"></a>
GitHub name: ${data.username}
[![GitHub Profile](https://github.com/${data.username})
To contact me, drop an email to: ${data.email}`;
}

module.exports = generateMarkdown;
