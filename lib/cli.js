const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('./svg.js'); // Use the 'svg.js' library
const { createSVG } = require('./logoGenerator');
const { color } = require('.svg.js');
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./shapes.js")

class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the text:',
                validate: (input) => input.length <= 3,
            },
        ]).then(({
            text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;
                case "square":
                    shape = new Square();
                    break;
                default:
                    shape = new Triangle();
                    break;

            }
            shape.setColor(shapeColor)
            svg.setText(text, color);
            svg.setShape(shape)
            const svg = new SVG();
            return writeFile("logo.svg", svg.render())
        })

        // Create the SVG element and set the dimensions.
 
    }
}
