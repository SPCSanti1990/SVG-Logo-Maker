// Import inquirer, shapes needed, and graceful-fs
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const filesystem = require("graceful-fs");

// Define SVG class that constructs the three methods for rendering, setting the text, and shape elements
class SVG {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shapeColor) {
        this.shapeElement = shapeColor.render()
    }
}

// Define an array of questions using inquirer
// Questions asked are TEXT, TEXT COLOR, SHAPE, SHAPE COLOR
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:"
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword"
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword"
    },
    {
        type: "list",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    }
]

// Add a function to write data to a file
function writeFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName+ "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("logo.svg has been generated")
    });
}

// Add a function to start program
async function init() {
    // Console log to user that the program is starting
    console.log("Starting program");

    // Create varriables needed to store user inputs
    let svgString = "";
    let svg_file = "logo.svg";
    const answers = await inquirer.prompt(questions);
    let user_text = "";

    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    }
    else {
        console.log("No text added or the text length is longer than 3 characters");
        return;
    }

    console.log("User text: [" + user_text + "]");

	//user font color
	user_font_color = answers["text-color"];
	console.log("User font color: [" + user_font_color + "]");

	//user shape color
	user_shape_color = answers["shapeColor"];
	console.log("User shape color: [" + user_shape_color + "]");

	//user shape type
	user_shape_type = answers["shape"];
	console.log("User entered shape = [" + user_shape_type + "]");
	
	//user shape
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
		console.log("User selected Square shape");
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color);

	// Create a new Svg instance and add the shape and text elements to it
	let svg = new SVG();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	//Print shape to log
	console.log("Displaying shape:\n\n" + svgString);


	console.log("Logo generation complete!");
	console.log("Writing logo to file...");
	writeFile(svg_file, svgString); 
}

init()