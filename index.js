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
let navigation = [
    ['Welcome', '<img src="Pictures/NavagationInstructions.png" />'],
    ['About This', "<div class='navigationText'> <h2>What is <b> this?</b></h2> <p>This is my website, blog, portfolio, journal, resume and some other stuff. I <b>Pig240</b> encourage users to explore and get to know the place, but if your here for somthing specific you're always welcome to use this navagation panel.</p> <h2>Editor's <b>Note</b></h2> <p>All text and imagery and unless otherwise stated was created and produced by me <b>Pig</b>. </p></div>"],
    ['About Me', '<div class="navigationText"> <h2>About <b>who?</b></h2> <p> About <b>Pig240</b>, me... Obviously not my real name and a kind of mask for the internet if you will.</p> <h2>Why the <b>mask?</b></h2> <p>I am not paranoid rather, I always saw the internet as more of a place for being the most you one can be. The name stems from my childhood gamertag, <b> Captain Pig </b>. Since then I have droped the "Captain" for a the shorteden name you see today, <b>Pig</b>.</p></div>'],
    ["Navigation", ""],
    ['Random Text', '<div class="navigationText"> <p> Curabitur maximus blandit massa quis cursus. Curabitur aliquam lectus tincidunt, tincidunt nunc id, sollicitudin arcu. Cras scelerisque tristique varius. Duis pellentesque molestie lacus, eu blandit nibh laoreet in. Duis ac lorem lorem. Vestibulum tristique libero justo, vitae feugiat risus rhoncus sit amet. Donec fermentum consectetur arcu, quis egestas turpis efficitur sit amet. Nulla facilisi. Aliquam sed nulla lectus. Mauris in dolor ac sem sagittis gravi Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui.Etiam luctus tellus sit amet sapien iaculis egestas vitae ut enim. Maecenas mollis feugiat porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sapien, suscipit sagittis enim vel, feugiat ultricies urna. Nunc ac suscipit diam, non hendrerit lectus. Quisque dictum, est at ultrices ultricies, neque mauris gravida lorem, id convallis lacus enim sit amet nibh. Duis vitae malesuada libero. Nunc placerat id neque in aliquet. Nullam leo risus, rutrum sed massa a, euismod hendrerit metus. Phasellus rhoncus velit magna, feugiat imperdiet augue ultricies maximus. Sed euismod massa id justo elementum, ac rhoncus nisi faucibus. Pellentesque tempor viverra ex in accumsan. Duis lacinia varius dui. </p > </div > ']
    
];



//Move navagation slides to another number 
function MoveNavagation(move)
{
    //Updates the current slide
    currentSlide += move;

    //Check if current slide will reach the limit of avlible slides.
    if (currentSlide >= navigation.length || currentSlide <= 0) {
        //Bring user back to start slide.
        currentSlide = 0;
    }

    //Changes header text
    document.getElementById("navHead").textContent = navigation[currentSlide][0];
    //Changes navagation content
    document.getElementById("navText").innerHTML = navigation[currentSlide][1];
}
































