"use strict";


//Vector 2 class to store positions
class Vector2 {

    #vector = [0, 0];
    constructor(x, y) {

        this.#vector[0] = x;
        this.#vector[1] = y;
    }

    get x() {
        return this.#vector[0];
    }

    get y() {
        return this.#vector[1];
    }

    SetVector(x, y) {
        this.#vector[0] = x;
        this.#vector[1] = y;
    }

}

//Get the canvas 
const canvas = document.getElementById("Lcanvas");
//Find canvas 2d
const canvasContext = canvas.getContext("2d");

//method that builds l system string 
var lsystem = function (startString, rules, iterations) {
    //Current generation string
    var currentString = startString;
    for (let i = 0; i < iterations; i++) {
        //Add the next generation every iteration
        currentString = nextGeneration(currentString, rules);
    }
    //Return finished string
    return currentString;
}



var nextGeneration = function (currentString, rules) {
    var result = "";
    for (let e = 0; e < currentString.length; e++) {
        //Current char in the generation string
        var char = currentString[e];
        //find the corsponding rule
        var ruleResult = rules[char];
        //Check if rule result can be added to generation 
        result += ruleResult === undefined ? char : ruleResult;
    }
    return result;
}

function DrwaTree() {
    canvasContext.save();
    //change line width
    canvasContext.lineWidth = 0.01;
    canvasContext.scale(canvas.width, canvas.height);
    //Move context over
    canvasContext.translate(0.5, 1);

    //reverse canvas so drawing is easier with math
    canvasContext.scale(1, -1);
    canvasContext.save();

    //Generate the tree
    interval = setInterval("CreateBranch()", 1);
}


function remove_character(str, char_pos) {
    let part1 = str.substring(0, char_pos);
    let part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

function ModifyTree() {
    let newResult = "";
    let currentGenNum = 0;
    let genNum = 0;

    let resultL = result.length;
    for (let i = 0; i <= resultL; i++) {
        //check if valid to add to new string
        if (genNum < 3) {
            //Check if update gen num
            switch (result.charAt(i)) {
                case "[":
                    genNum++;
                    break;
                case "]":
                    genNum--;
                    break;
                default:
                    //do nothing
                    break;
            }
            //Add to new result
            newResult += result.charAt(i);

        } else {
            switch (result.charAt(i)) {
                case "[":
                    genNum++;
                    if (newResult.charAt(newResult.length - 1) != "[")
                    {
                        newResult += result.charAt(i);
                    }
                    
                    break;
                case "]":
                    genNum--;
                    if (newResult.charAt(newResult.length - 1) != "]") {
                        newResult += result.charAt(i);
                    }
                    
                    break;
                default:
                    //do nothing
                    break;
            }
        }

        
    }

    //loop through all of results to refine them
    for (let c = 0; c < newResult.length; c++) {
        //check if current char is the start of branch
        if (newResult.charAt(c) == "[") {
            if (newResult.charAt(c + 1) == "]") {
                if (newResult.charAt(c + 3) == "]") {
                    newResult = remove_character(newResult, c);
                    newResult = remove_character(newResult, c);
                    c = 0;
                }
            }
            

            
        }
    }
    

    
    //result = newResult.replace("[]", "");
    //result = newResult.replace(/[]\)/g, "" );
    result = newResult
    console.log(result);
    return result;
}

//Interval to build tree over time instead of instant
var interval;

//Declare tree rules
var ruleset1 = {
    "A": "B[+A]B[-A]+A",

    "B": "BB",

    //"B": "BAB",

};

//Starting string
var axiom = "A";

//L system string generated
//Store how many times a generation is created
var iterations = 8;

//Current position on canvas
var currentPosition = {
    y: 0,
    x: 0,
};

//lines length on the tree determined by how many generation
var lineLenght = 1 / (Math.pow(2, iterations + 2));
//Angle the branches span
var angle = 20;

//Start pos = center of screen 
var initialPosition = new Vector2(canvas.width / 2, canvas.height);


//Create l system results 
var result = lsystem(axiom, ruleset1, iterations);

//Modify result to have less detail, but be just as big
result = ModifyTree();


    //Draw the tree using result
    DrwaTree();






function CreateBranch() {

    if (result.length > 1) {
        commands[result.charAt(0)]();
        //Remove last char from string
        //console.log(result.charAt(result.length - 1));
        result = result.slice(1, result.length);

        if (canvasContext.lineWidth > 0.0001) {
            canvasContext.lineWidth -= 0.00001;
        } else {
            
        }

        //console.log(result);
    } else {
        clearInterval(interval);
    }
}

var check = {
    "A": function () {


        /*
        canvasContext.strokeStyle = "green";
        canvasContext.beginPath();
        canvasContext.moveTo(0, currentPosition.y);
        currentPosition.y += len;
        canvasContext.lineTo(0, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
        */
    },
    "B": function () {

        canvasContext.strokeStyle = "black";
        canvasContext.beginPath();
        canvasContext.moveTo(currentPosition.x, currentPosition.y);
        currentPosition.y += lineLenght + (Math.random() / 1000);
        canvasContext.lineTo(currentPosition.x, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
    },
    "[": function () {

        canvasContext.translate(0, currentPosition.y);
        currentPosition.y = 0;
        canvasContext.save();
        //canvasContext.rotate(+25 * (Math.PI / 180));
    },
    "]": function () {

        currentPosition.y = 0;
        canvasContext.restore();
        //canvasContext.rotate(-25 * (Math.PI / 180));
    },
    "+": function () {
        //canvasContext.translate(0, currentPosition.y);
        //currentPosition.y = 0;
        //currentPosition.y = 0;
        canvasContext.rotate((Math.PI / 180) * angle);
        canvasContext.translate(0, currentPosition.y);
        currentPosition.y = 0;


    },
    "-": function () {


        currentPosition.y = 0;
        canvasContext.rotate((Math.PI / 180) * -angle);

    }
};



var commands = {
    "A": function () {


        /*
        canvasContext.strokeStyle = "green";
        canvasContext.beginPath();
        canvasContext.moveTo(0, currentPosition.y);
        currentPosition.y += len;
        canvasContext.lineTo(0, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
        */
    },
    "B": function () {

        canvasContext.strokeStyle = "black";
        canvasContext.beginPath();
        canvasContext.moveTo(currentPosition.x, currentPosition.y);
        currentPosition.y += lineLenght + (Math.random() / 1000);
        canvasContext.lineTo(currentPosition.x, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
    },
    "[": function () {

        canvasContext.translate(0, currentPosition.y);
        currentPosition.y = 0;
        canvasContext.save();
        //canvasContext.rotate(+25 * (Math.PI / 180));
    },
    "]": function () {

        currentPosition.y = 0;
        canvasContext.restore();
        //canvasContext.rotate(-25 * (Math.PI / 180));
    },
    "+": function () {
        //canvasContext.translate(0, currentPosition.y);
        //currentPosition.y = 0;
        //currentPosition.y = 0;
        canvasContext.rotate((Math.PI / 180) * angle);
        canvasContext.translate(0, currentPosition.y);
        currentPosition.y = 0;


    },
    "-": function () {


        currentPosition.y = 0;
        canvasContext.rotate((Math.PI / 180) * -angle);

    }
};







