// Import inquirer, shapes needed, and graceful-fs
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const filesystem = require("graceful-fs");

// Define SVG class that constructs the three methods for rendering, setting the text, and shape elements
class SVG{
    constructor(){
        this.textElement=''
        this.shapeElement=''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement=shape.render()
    }
}

// Define an array of questions using inquirer
// Questions asked are TEXT, TEXT COLOR, SHAPE, SHAPE COLOR

// Add a function to write data to a file

