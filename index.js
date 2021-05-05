"use strict";

/*
    Header JS
    Makes the slideshow for the header,
    storing the h1 and desrcription in a array. 
*/






/*
    Navagation Header
*/

//Store the current slide
let currentSlide = 0;

//A two dimensional array storing header of navagation and innerhtml for aside
let navagations = [
    ['Welcome', '<p>nerd </p>'],
    ['Introducing', '<p id="nerd">slides</p>']
];


//Move navagation slides to another number 
function MoveNavagation(move)
{
    //Updates the current slide
    currentSlide += move;
    //Changes header text
    document.getElementById("navHead").textContent = navagations[currentSlide][0];
    //Changes navagation content
    document.getElementById("navText").innerHTML = navagations[currentSlide][1];
}
































