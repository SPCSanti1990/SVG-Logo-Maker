// Defines class called shapes to construct inializing color and sets the color to the color value
class Shape{
    constructor() {
        this.color = ''
    };
    setColor(color) {
        this.color = (color)
    };
};

// Defines a circle class that extends the shape and renders a circle
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    };
};

// Defines a triangle class that extends the shape and renders a triangle
class Triangle extends Shape{
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    };
};

// Defines a square class that extends the shape and renders a square
class Square extends Shape{
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    };
};

// Export shape
module.exports = {Circle, Square, Triangle}