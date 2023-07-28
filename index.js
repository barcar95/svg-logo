const fs = require("fs");
const inquirer = require("inquirer");
const Shape = require("./lib/shapes")
const Circle = require("./lib/circle");

// need a function that uses inq to ask user for text, text color, shape,  and shape color.
const userPrompts = () => {
    inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "text",
        message: "Type in 3 characters",
        validate: function (textInput) {
            if(textInput.length > 3){
                return "Can't be greater than 3 characters!"
            }
            return true;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "type in a color for the text. Can be a hex code or color word",
    },
    {
        type: "list",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
        message: "Choose from one of the following shapes:",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "type in a color for the shape. Can be a hex code or color word",
    }
  ])

  .then((answers) => {
    // Use user feedback for... whatever!!
    let svg;
    if (answers.shape === "Circle"){
        svg = new Circle();
    } else if (answers.shape === "Square"){
        // assign svg square
    } else {
        // assign svg triangle
    }

    svg.setText(answers.text);
    svg.setColor(answers.textColor);
    svg.setShapeColor(answers.shapeColor);

    fs.writeFile( `./examples/${answers.shape}.svg`, svg.render(), (err) => {
        if (err){
            console.log(err);
        } else {
            console.log("Success!");
        }
    } )

    // console.log(answers);
  })
}
 userPrompts();
// use answers to create writefile

// tell fs pathway to examples folder


