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
    ["Projects", "<div class='navigationText'> <h2> What Projects? </h2> <p> As I learn and work through course materials I often come up with some project to go along with it. Usually this leads to a better understanding of the material and a fun book mark of what I learned. Some projects are entirely based on material I'm working with while others are just fun applications or implementations of what I know.</p> <h2> Purpose </h2> <p> While these projects are important to me, they serve as an example of what I know. Not all projects are equal, thus some may get more attention than others. Web Repair even got its own section on this page.</p> <h2> Outdated </h2> <p>As larger projects such as Web Repair get dated and age. I may move them to the projects board as a retired project. All projects on the board are labeled in progress, weather delayed, canceled, in progress or finished. So don't worry about old projects disappearing.</p> </div>"],
    ["Learning Journal", "<div class='navigationText'> <h2>Learning What?</h2> <p> As said in my introduction, I have intentions in studying all sorts of interests. Of course I won't be learning a lot of my craft from traditional academia. Mostly from my own experiments and virtual sources available to me. </p> <h2>Teacher? </h2> <p>In most settings a teacher is definitely most helpful for learning in most cases, but ironically that's not the most valued aspect in school settings. The most valued resource I find in educational institutes is the course materials. All the course material, pace of information presented and experts of the subject are all available to you. An undervalued attribute of school, however can be worked around with effort to understand the materials relation and determine the best pathway to take when learning a subject. A teacher is just a tour guide of a subject, but it never hurts to get lost.</p> <h2> Active Learning </h2> <p> An important thing to note is subjects and skills on the learning board does not mean I'm not learning other skills at the time. These are just my focus and what deserves the most attention as of now. I'm always open to hear of new subjects and resources available for review and research. </p> <h2> Resources </h2> <p>The world wide web has a lot of resources on very broad and specific topics. Searching cooking brings up 2.5 trillion results. However reality hits that alot of these sites are either unhelpful, unclear, completely unrelated or is exactly what you need. While I'm using these resources, I'll report on how well the resource approached it's topic. More on this later.</p> </div>"],
    ["Web Repair", "<div class = 'navigationText'> <h2> Shattered Dreams </h2> <p>As the web ages and classic sites become outdated, many find it important to preserves these gems. While I agree with this sentiment, it's important to keep the current sites up to date. Thus I take some classic sites that are still up and try my best to fix the code while not losing that subtle quirk of gems.</p> <h2> What Sites? </h2> <p>NASA has been around since 1958 and as it ages, it seems to forget about older websites they made. Such as the original site for the Mar Pathfinder which is a perfect example of classic. Or old documentation of science labs that have since shut down, but websites remain </p> <h2> Original </h2> <p>As I like to keep everything on this site original, this will be an exception as I will be taking images from the original sites and plastering them on the reworked site. Thus I don't claim to be the creator nor will the end project be 100% the same. I may add some content for contax or take away as it doesn't meet web standards. I'll be sure to include in the description of projects wether text was altered, aswell a link to the original site.</p> </div>"],
    ["Rotten Carrots", "<div class = 'navigationText' <h2> Reviews </h2> <p> After finishing a game or curriculum, I find that it is important to leave a review. This is because, not only does it help me learn to articulate my thoughts better. It helps others by comparing what they thought and your thoughts. By knowing what others like, it helps determine whether you'll like. If you know someone who hates beef and they tell you about an amazing burger place where they had a beef brisket. That must be a pretty good burger joint, huh? </p> <h2> Content </h2> <p> I have thoughts on all sorts of media, but I'll try and keep it tailored to things I'm competent in such as code and course work. If I find that a course particularly stands out in quality, than I'll definitely recommend it to those who are learning the subject. While when playing a game and I find time and time again that I'm just monotonously performing a fetch quest. Than I'm going to say that the game is boring, but I'll explain why I feel fetch quests are boring. </p> <h2>Experience </h2> <p>Now I'm not a great writer as you can tell. I like to think however I'm an expert RTS player. I have experience with multiple games, movies, programs, code and more. As to know what you like, you gotta try things you hate.</p> </div>"],
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
































