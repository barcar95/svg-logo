const Triangle = require("./triangle");

test('set text to constructor', () => {
    const triangleTest = new Triangle();
    triangleTest.setText("svg");
    expect(triangleTest.text).toBe("svg");
});

test('set color to constructor', () => {
    const triangleTest = new Triangle();
    triangleTest.setColor("orange");
    expect(triangleTest.color).toBe("orange");
});

test('set shape color to constructor', () => {
    const triangleTest = new Triangle();
    triangleTest.setShapeColor("red");
    expect(triangleTest.shapeColor).toBe("red");
});