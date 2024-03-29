// Import the shapes from the shapes.js file
const {Circle, Square, Triangle} = require("./shapes");

// Test the circle rendering
describe("Circle", () => {
    test("renders correctly", () => {
        const shape = new Circle();
        const color = ("green")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

// Test the square rendering
describe("Square", () => {
    test("renders correctly", () => {
        const shape = new Square();
        const color = ("blue")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});

// Test the triangle rendering
describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('pink')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
  });