const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('@svgdotjs/svg.js'); // Use the 'svg.js' library
const { createSVG } = require('./logoGenerator');

const main = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => input.length <= 3,
      },
    ]);

    // Create the SVG element and set the dimensions.
    const draw = SVG().size(300, 200);

    // Create the shape based on the user's choice (e.g., 'circle', 'square', 'triangle').
    let element;
    if (answers.shape === 'circle') {
      element = draw.circle(150); // Circle with a radius of 75 (diameter of 150).
    } else if (answers.shape === 'square') {
      element = draw.rect(150, 150); // Square with sides of 150.
    } else if (answers.shape === 'triangle') {
      element = draw.polygon('75,0 150,150 0,150'); // Triangle coordinates.
    }

    // Set the fill color for the shape.
    element.fill(answers.shapeColor);

    // Add text to the SVG.
    draw.text(answers.text).move(100, 100); // Adjust text position.

    // Serialize the SVG to a string.
    const svgString = draw.svg();

    const svg = createSVG(answers.text, answers.shape, answers.textColor, answers.shapeColor);

    // Save the SVG to a file.
    fs.writeFileSync('logo.svg', svgString);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

main();