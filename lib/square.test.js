const Square = require("./square");

test('set text to constructor', () => {
    const squareTest = new Square();
    squareTest.setText("svg");
    expect(squareTest.text).toBe("svg")
});

test('set color to constructor', () => {
    const squareTest = new Square();
    squareTest.setColor("orange");
    expect(squareTest.color).toBe("orange");
});

test('set shape color to constructor', () => {
    const squareTest = new Square();
    squareTest.setShapeColor("red");
    expect(squareTest.shapeColor).toBe("red");
});