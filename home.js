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
    interval2 = setInterval("CreateBranch()", 1)
}


//L system string generated
//Store how many times a generation is created
var iterations = 8;



//Declare tree rules
var ruleset1 = {
    "A": "B[+A]B[-A]+A",
<<<<<<< Updated upstream
    "B": "BB",
=======
    "B": "BAB",
>>>>>>> Stashed changes

};
/*
var ruleset1 = {
    "A": "A[+A]BA[-A]",
    "B": "BBA",
    var axiom = "A[+A]BA[-A]";
};
*/

//Starting string
var axiom = "A";




//Create l system results 
var result = lsystem(axiom, ruleset1, iterations);




//
var lineLenght = 1 / (Math.pow(2, iterations + 2));
//Current position
var currentPosition = {
    y: 0,
    x: 0,
};



//Draw the tree using result
DrwaTree();




//Start pos = center of screen 
var initialPosition = new Vector2(canvas.width / 2, canvas.height);



var interval;
var interval2;
var angle = 20;















function CreateBranch() {
    
    if (result.length > 1) {
        commands[result.charAt(0)]();
        //Remove last char from string
        //console.log(result.charAt(result.length - 1));
        result = result.slice(1, result.length);

        if (canvasContext.lineWidth > 0.0001) {
            canvasContext.lineWidth -= 0.00001;
        } else {
            console.log("STop shriking");
        }
       
        //console.log(result);
    } else {
        clearInterval(interval);
        clearInterval(interval2);
    }
    

    

}

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







