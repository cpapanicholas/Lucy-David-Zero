const { Error } = require("console");

class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.textElement}</svg>`
    }
    setText(message, color) {
        if (message.length > 3) {
            throw new Error("Text must not exceed three characters.")
        }
        this.textElement = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
setShape (shape) {
    this.shapeElement = shape.render();
}   
}
module.exports = SVG;