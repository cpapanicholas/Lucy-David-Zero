// const SVG = require('@svgdotjs/svg.js');

// const createSVG = (text, shape, color) => {
//   // Create an SVG document.
//   const draw = SVG().size(200, 200);

//   // Create the shape based on user input.
//   const element = draw.rect(150, 150);
//   if (shape === 'Circle') {
//     element.circle(100);
//   } else if (shape === 'Triangle') {
//     element.polygon('50,0 100,100 0,100');
//   }

//   // Set the shape's color.
//   element.fill(color);

//   // Add text to the SVG.
//   draw.text(text).move(25, 75);

//   // Serialize the SVG to a string.
//   return draw.svg();
// };

// module.exports = { createSVG };
const SVG = require('@svgdotjs/svg.js');

const createSVG = (text, shape, color) => {
  // Create an SVG document.
  const draw = SVG().size(200, 200);

  // Create the shape based on user input.
  const element = draw.rect(150, 150);
  if (shape === 'Circle') {
    element.circle(100);
  } else if (shape === 'Triangle') {
    element.polygon('50,0 100,100 0,100');
  }

  // Set the shape's color.
  element.fill(color);

  // Add text to the SVG.
  draw.text(text).move(25, 75);

  // Serialize the SVG to a string.
  return draw.svg();
};

module.exports = { createSVG };
