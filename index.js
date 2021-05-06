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

//A two dimensional array storing header of navagation and innerhtml for aside element
let navagations = [
    ['Welcome', '<img src="Pictures/NavagationInstructions.png" />'],
    ['About This', '<div class="navagationAbout"> <p>About this stuff </p> </div>'],
    ['About Me', '<div class="navagationAbout"> <p> About Me stuff </p> </div>'],
    ['Random Text', '<div class="navagationAbout"> <p> Curabitur maximus blandit massa quis cursus. Curabitur aliquam lectus tincidunt, tincidunt nunc id, sollicitudin arcu. Cras scelerisque tristique varius. Duis pellentesque molestie lacus, eu blandit nibh laoreet in. Duis ac lorem lorem. Vestibulum tristique libero justo, vitae feugiat risus rhoncus sit amet. Donec fermentum consectetur arcu, quis egestas turpis efficitur sit amet. Nulla facilisi. Aliquam sed nulla lectus. Mauris in dolor ac sem sagittis gravi Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui.Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. </p > </div > ']
    
];



//Move navagation slides to another number 
function MoveNavagation(move)
{
    //Updates the current slide
    currentSlide += move;

    //Check if current slide will reach the limit of avlible slides.
    if (currentSlide >= navagations.length || currentSlide <= 0) {
        //Bring user back to start slide.
        currentSlide = 0;
    }

    //Changes header text
    document.getElementById("navHead").textContent = navagations[currentSlide][0];
    //Changes navagation content
    document.getElementById("navText").innerHTML = navagations[currentSlide][1];
}
































