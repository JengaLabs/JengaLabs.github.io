"use strict";
//Class that has a first in last out 
class Stack {

    // Array used to implement stack
    constructor() {
        this.items = [];
    }

    //Functions include
    // push (item)
    // pop()


    //Push adds an element to the stack
    push(element) {
        this.items.push(element);
    }

    //Pop removes an element from the statck 
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        } else {
            return this.items.pop(0);
        }
    }

    //See whats in the top 
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

}

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


const canvas = document.getElementById("Lcanvas");
const ctx = canvas.getContext("2d");

//Seed of the tree
const axiom = "A";

//Store how many times a generation is created
var iterations = 3;

//Curnent generation string
var currentString;

//Store the next generation
var nextString = ""

//Final tree
var treeStack = new Stack();

//Start pos = center of screen 
var initialPosition = new Vector2(canvas.width / 2, canvas.height);

//pens position
var penPosition = new Vector2(initialPosition.x, initialPosition.y);

//Stack of positions
var transformStack = new Stack();
//temp char to hold values 
var tempChar = '';

//keep track of time passed 
var interval;

//declare ruels
var rules = [
    //key , value 
    ['A', '[B-[A]+A]+B[+BA]-A]'],
    ['B', 'BB'],
    ['C', '[A][A]']
];



Generate();


function Generate() {
    //Create a parrent
    

    //set the current generation
    currentString = axiom;

    for (let i = 0; i < iterations; i++) {
        
        //loop till reached max generations
        for (let z = 0; z < currentString.length; z++) {

            
            //check if the rule is in the rule book
            for (let b = 0; b < rules.length; b++) {
                
                if (rules[b][0] == currentString.charAt(z)) {
                    //add if rules is in book
                    nextString += rules[b][1];
                }
                
            }
            

            
        }

        //get next generation as current
        currentString = nextString;
        //reset next generation
        nextString = "";

    }

    //Generate object
    

    //loop through every letter in the generations
    for (let i = currentString.length; i > 0 ; i--) {
        //Switch case for what each value pair does
        treeStack.push(currentString.charAt(i));
    }

    

    
    //treeStack.push(currentString.charAt(i));
    interval = setInterval("CreateBranch()", 10);

    
}

var pos;

function CreateBranch() {

    tempChar = treeStack.pop();
    
    
    switch (tempChar) {
        case 'A':
            
            break;
        case 'B':
            //Move up a half step

            ctx.moveTo(treeStack.peek().x, treeStack.peek().y);
            initialPosition.SetVector(initialPosition.x, initialPosition.y - Math.floor(Math.random() * 5));
            ctx.lineTo(initialPosition.x, initialPosition.y);
            ctx.stroke();
            break;
        case '+':
            ctx.moveTo(initialPosition.x, initialPosition.y);
            initialPosition.SetVector(initialPosition.x + Math.floor(Math.random() * 20), initialPosition.y - Math.floor(Math.random() * 2));
            ctx.lineTo(initialPosition.x, initialPosition.y);
            ctx.stroke();
            break;
        case '-':
            ctx.moveTo(initialPosition.x, initialPosition.y);
            initialPosition.SetVector(initialPosition.x - Math.floor(Math.random() * 20), initialPosition.y  - Math.floor(Math.random() * 2));
            ctx.lineTo(initialPosition.x, initialPosition.y);
            ctx.stroke();
            break;
        case '*':
            ctx.moveTo(initialPosition.x, initialPosition.y);
            initialPosition.SetVector(initialPosition.x + Math.floor(Math.random() * 10), initialPosition.y - Math.floor(Math.random() * 5));
            ctx.lineTo(initialPosition.x, initialPosition.y);
            ctx.stroke();
            break;
        case '/':
            ctx.moveTo(initialPosition.x, initialPosition.y);
            initialPosition.SetVector(initialPosition.x - Math.floor(Math.random() * 10), initialPosition.y - Math.floor(Math.random() * 5));
            ctx.lineTo(initialPosition.x, initialPosition.y);
            ctx.stroke();
            break;
        case '[':
            console.log("start");
            transformStack.push(new Vector2(initialPosition.x, initialPosition.y));
            break;
        case ']':
            console.log("move back");
            pos = transformStack.pop();
            initialPosition.SetVector(pos.x, pos.y);
            break;
        case 'C':
            initialPosition.SetVector(initialPosition.x, initialPosition.y + Math.random());
            break;
        default:
            console.log("Rule not in stack" + tempChar);
            clearInterval(interval);
            break;
    }

    

    treeStack.pop();
}


/*
var x1 = 0;
var y1 = 0;
var length = 50;
var theta = 45;
ctx.moveTo(x1, y1);
ctx.lineTo(x1 + length * Math.cos(Math.PI * theta / 180.0), y1 + length * Math.sin(Math.PI * theta / 180.0));
ctx.stroke();
*/








