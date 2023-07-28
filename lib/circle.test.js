const Circle = require("./circle");

test('set text to constructor', () => {
    const circleTest = new Circle();
    circleTest.setText("svg");
    expect(circleTest.text).toBe("svg");
});

test('set text to constructor', () => {
    const circleTest = new Circle();
    circleTest.setColor("orange");
    expect(circleTest.color).toBe("orange");
});

test('set text to constructor', () => {
    const circleTest = new Circle();
    circleTest.setShapeColor("red");
    expect(circleTest.shapeColor).toBe("red");
});