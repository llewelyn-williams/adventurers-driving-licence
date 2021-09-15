// the first div
const card1 = document.getElementById("card1");

// position it nearly completely off to the left
document.getElementById("card1").style.left = - (screen.width/2 + 60) + "px";
// check it's position in the console
console.log (document.getElementById("card1").style.left);
// this presumabley creates 120fps style fluidity
const cardAnimator = setInterval(moveCard, 1000/120);

function moveCard(){
    // assign the starting left to a variable
    const lpos = card1.style.left;
    // get just the number part from the "..px" left value
    const myNum = Number(card1.style.left.slice(0, lpos.length - 2));
    /* Increase it and then append the "px" back on
    updating the left value to be that. */
    card1.style.left = (myNum + 12) + "px";


    // stop animating
    if (myNum >= 0) {
        // stop the setInterval
        clearInterval(cardAnimator);
        // set the card back to its intended end position.
        card1.style.left = "0px";
    }
}


// Put content from massive object onto the page

// Variables for Page elements
// the question card
const questionCard = document.getElementById("question-display");
// the second div
const card2 = document.getElementById("card2");
// the third div
const card3 = document.getElementById("card3");

// Set the innerHTML of the page elements
questionCard.innerHTML = exam.question1.questionText;
card1.innerHTML = exam.question1.answers.answer1.answerText;
card2.innerHTML = exam.question1.answers.answer2.answerText;
card3.innerHTML = exam.question1.answers.answer3.answerText;


// Page Display

// A variable that holds which page is desired.
let page = "landing";

/**
 * Hides all sections other than the one specified.
 *
 * @param {string} newpage The class name of the section to be shown
 */
function changePage(newpage) {
    // Get all the sections (differnt "pages").
    /*
       Specifically using querySelectorAll instead of
       getElementsByClassName becuase it exposes forEach
       which I need to use intead of "for of" to pass
       JSLint.
       Hint from StackOverflow
       https://stackoverflow.com/questions/10964163/for-each-element-type-in-body
    */
    const sections = document.querySelectorAll("section");
    // Get the one you want as determined by the variable.
    const activeSection = document.getElementsByClassName(newpage);
    // Iterate through all the sections

    sections.forEach(changeDisplay);
        function changeDisplay(section){
        // Change the display over every section to none.
        section.style.display = "none";
        // But then if the section is the one you want...
        if (section === activeSection[0]){
            // Change just its display back to block.
            section.style.display = "block";
        }
    }
}

changePage(page);