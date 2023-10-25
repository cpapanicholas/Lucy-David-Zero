const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./svgGenerator');

const main = async () => {
    try {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for your logo:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape for your logo:',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          type: 'list',
          name: 'color',
          message: 'Select a color for your logo:',
          choices: ['Red', 'Green', 'Blue', 'Yellow'],
        },
        {
          type: 'input',
          name: 'filename',
          message: 'Enter the filename for the SVG:',
          default: 'logo.svg',
        },
      ]);

          // Create the SVG logo using the provided answers.
    const svg = createSVG(answers.text, answers.shape, answers.color);

    // Save the SVG to a file.
    fs.writeFileSync(answers.filename, svg);

    console.log(`Logo generated and saved as ${answers.filename}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

main();