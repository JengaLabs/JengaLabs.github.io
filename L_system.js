"use strict";

// L-system
var lsystem = function (startString, rules, iterations) {
    var currentString = startString;
    for (var k = 0; k < iterations; k++) {
        currentString = nextGeneration(currentString, rules);
    }
    return currentString;
};

var nextGeneration = function (currentString, rules) {
    var result = "";
    for (var i = 0; i < currentString.length; i++) {
        var char = currentString[i];
        var r = rules[char];
        result += r === undefined ? char : r;
    }
    return result;
};

// tree L-system example in
// http://en.wikipedia.org/wiki/L-system
var iterations = 5;
var ruleset1 = {
    "0": "1[0]0",
    "1": "11",
};
var start = "0";

var result = lsystem(start, ruleset1, iterations);
console.log(result);


// draw as tree
var canvas = document.getElementById("Lcanvas");
var canvasContext = canvas.getContext("2d");
canvasContext.save();
canvasContext.scale(canvas.width, canvas.height);
canvasContext.translate(0.5, 0.8);
canvasContext.scale(1, -1);
canvasContext.lineWidth = 0.02;
canvasContext.save();
var lineLenght = 1 / (Math.pow(2, iterations + 1));
var currentPosition = { y: 0 };

var commands = {
    "0": function () {
        canvasContext.strokeStyle = "green";
        canvasContext.beginPath();
        canvasContext.moveTo(0, currentPosition.y);
        currentPosition.y += lineLenght;
        canvasContext.lineTo(0, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
    },
    "1": function () {
        canvasContext.strokeStyle = "brown";
        canvasContext.beginPath();
        canvasContext.moveTo(0, currentPosition.y);
        currentPosition.y += lineLenght;
        canvasContext.lineTo(0, currentPosition.y);
        canvasContext.closePath();
        canvasContext.stroke();
    },
    "[": function () {
        canvasContext.translate(0, currentPosition.y);
        currentPosition.y = 0;
        canvasContext.save();
        canvasContext.rotate(+25 * (Math.PI / 180));
    },
    "]": function () {
        currentPosition.y = 0;
        canvasContext.restore();
        canvasContext.rotate(-25 * (Math.PI / 180));
    },
};

// use result to draw
for (var i = 0; i < result.length; i++) {
    commands[result[i]]();
}