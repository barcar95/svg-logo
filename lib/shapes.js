class Shape {
    constructor (text, color, shapeColor){
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    
    setText(text) {
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }

    setShapeColor(shapeColor){
        this.shapeColor = shapeColor;
    }
}

module.exports = Shape;