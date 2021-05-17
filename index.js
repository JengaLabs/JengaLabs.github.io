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
    ["About Me", "<div class='navigationText'> <h2> About <b>Pig</b></h2> <p>I'm <b>Pig</b>, the man behind this site's code and all other content as you may have noticed. This is my first real site outside of the classroom setting so bear with me. To quote a familiar figure &ldquo;Dude, suckin&lsquo; at something is the first step to being sorta good at something.&rdquo;- Jake the Dog.</p> <h2> Software Developer </h2> <p> A bold title to give one&rsquo;s self, but to be fair people are calling themselves gurus of technology these days. On a good week I can be combining three to four design patterns, other days I&lsquo;m googling &ldquo;hello world&rdquo; in HTML. Never fear, however, as it's all part of the learning adventure and when I&lsquo;m rolling and rocking I get to make all sorts of amazing applications. </p > <h2> Scientist? </h2> <p> A scientist is described as &rdquo;someone who systematically gathers and uses research and evidence, to make hypotheses and test them, to gain and share understanding and knowledge&ldquo; on the authority of Science Council. I have no credentials nor would I show them online that verifies I&lsquo;m any kind of scientist. However, I do try my best to follow scientific approaches and present my research with enough evidence to qualify for real research documents. </p> <h2> Still a Student </h2> <p> I'm in high school as of now with about a year left. Of course after school, I still plan on researching and taking courses on areas of interest. Software Development, Computer Science, Biology, Rocket Science, Mathematics, Piano, Engineering, Chemistry, and lots more are things I intend to cover at some point. For now though I'll pick up what I can and work with it. </p> <h2> Even More </h2> <p> Too learn even more about me, check out the official &ldquo;<a href=''>Pig Who?</a>&rdquo; section. Or press the navigation title to be transported there. The same jump around works on all navigation titles. probably... </p>"],
    ['About This', "<div class='navigationText'> <h2>What is <b> this?</b></h2> <p>This is my website, blog, portfolio, journal, resume and some other stuff. I <b>Pig240</b> encourage users to explore and get to know the place, but if your here for somthing specific you're always welcome to use this navagation panel.</p> <h2>Editor's <b>Note</b></h2> <p>All text, imagery and video unless otherwise stated was created and produced by me <b>Pig</b>. </p></div>"],
    ["Navigation", ""]  
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
































