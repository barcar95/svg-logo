const Shape = require("./shapes");

test('set text to constructor', () => {
  const shapeTest = new Shape();
  shapeTest.setText("svg");  
  expect(shapeTest.text).toBe("svg");
});

test('set color to constructor', () => {
  const shapeTest = new Shape();
  shapeTest.setColor("blue");  
  expect(shapeTest.color).toBe("blue");
});

test('set shape color to constructor', () => {
  const shapeTest = new Shape();
  shapeTest.setShapeColor("green");  
  expect(shapeTest.shapeColor).toBe("green");
});