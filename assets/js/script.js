const card1 = document.getElementById("card1"); //the first div

document.getElementById("card1").style.left = - (screen.width/2 + 60) + "px"; // position it nearly completely off to the left
console.log (document.getElementById("card1").style.left); // check it's position in the console

const cardAnimator = setInterval(moveCard, 1000/120); // this presumabley creates 120fps style fluidity

function moveCard(){
    const lpos = card1.style.left; //assign the starting left to a variable
    const myNum = Number(card1.style.left.slice(0, lpos.length - 2)); //get just the number part from the "..px" left value
    card1.style.left = (myNum + 12) + "px"; //add 30 to it and then append the "px" back on and update the left type to be that.
    //console.log((myNum + 12) + "px"); // console log the updating values

    // stop animating
    if (myNum >= 0) {
        clearInterval(cardAnimator); //stop the setInterval
        card1.style.left = "0px"; // set the card back to its intended end position.
    }
};


// Put content from massive object onto the page

//Variables for Page elements
const questionCard = document.getElementById("question-display"); //the question card
const card2 = document.getElementById("card2"); //the second div
const card3 = document.getElementById("card3"); //the third div


//https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript/34579496
//didn't use, went for object instead

//Set the innerHTML of the page elements
questionCard.innerHTML = exam.question1.questionText;
card1.innerHTML = exam.question1.answers.answer1.answerText;
card2.innerHTML = exam.question1.answers.answer2.answerText;
card3.innerHTML = exam.question1.answers.answer3.answerText;


//Page Display

//A variable that holds which page is desired.
let page = "landing";
//Get all the sections (differnt "pages").
const sections = document.getElementsByTagName("section");
//Get the one you want as determined by the variable.
const activeSection = document.getElementsByClassName(page);
//Iterate through all the sections
for (section of sections){
    //Change the display over every section to none.
    section.style.display = "none";
    //But then if the section is the one you want...
    if (section == activeSection[0]){
        //Change just its display back to block.
        section.style.display = "block";
    }
}
