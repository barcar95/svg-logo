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
}

// use answers to create writefile

// tell fs pathway to examples folder


