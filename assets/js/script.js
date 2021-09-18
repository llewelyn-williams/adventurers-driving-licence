// Various Elements by ID
const questionCard = document.getElementById("question-display");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");


//Animations

// position it nearly completely off to the left
document.getElementById("card1").style.left = - (screen.width/2 + 60) + "px";

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

//Licences Set
let licencesSaved = [];

//load any licences
if (JSON.parse(localStorage.getItem("licences"))) {
    const licencesFromStorage = JSON.parse(localStorage.getItem("licences"));
    licencesSaved = licencesFromStorage;
}


// Progressing Questions
const answers = [];
let selectedAnswer = 0;

// Vaiable to track which question we are on.
let currentQuestion = 1;

// Set the initial innerHTML of the page elements
questionCard.innerHTML = exam.question1.questionText;
card1.innerHTML = exam.question1.answers.answer1.answerText;
card2.innerHTML = exam.question1.answers.answer2.answerText;
card3.innerHTML = exam.question1.answers.answer3.answerText;

//Add event listener on back button to reset questions
const footerBackButton = document.getElementById("footer-return");
footerBackButton.addEventListener("click", initaliseQuestions);


// Add event listeners for accepting answers
card1.addEventListener("click", acceptAnswer);
card2.addEventListener("click", acceptAnswer);
card3.addEventListener("click", acceptAnswer);

// Advance the tracker and change the values of the cards.
function acceptAnswer(e){

    let theQuestion = "question" + currentQuestion;
    let answerStat = "";
    const preNumberNamePart = "card";
    // Append stat to aswers array
    selectedAnswer = Number(this.id.slice(preNumberNamePart.length, this.id.length));
    answerStat = exam[theQuestion].answers["answer"+selectedAnswer].answerStat;
    answers.push(answerStat);
    console.log(answers);

    // But only advance if there's still another quetion in exam to do so
    // I wasn't sure how to "get the length" of a object as it were
    // Hint found on StackOverflow:
    // https://stackoverflow.com/questions/5223/length-of-a-javascript-object
    if(currentQuestion < Object.keys(exam).length){
        currentQuestion += 1;
        console.log(currentQuestion);
        theQuestion = "question" + currentQuestion;
        questionCard.innerHTML = exam[theQuestion].questionText;
        card1.innerHTML = exam[theQuestion].answers.answer1.answerText;
        card2.innerHTML = exam[theQuestion].answers.answer2.answerText;
        card3.innerHTML = exam[theQuestion].answers.answer3.answerText;
    } else {
        // Last answer given. End.
        console.log("END!");
        console.log(answers);
        changePage("licence");
        //console.log(calculateMostOf(answers));
        document.getElementById("result-display-text").innerHTML = "You chose mostly" + calculateMostOf(answers);
    }

}

function calculateMostOf(abcs){
    let thiefs = 0;
    let fighters = 0;
    let mages = 0;
    let most = ` <span style="font-style: italic;">none</span> more than all others.`;
    let i = 0;
    let licence = "";

    for(i = 0; i < abcs.length; i+= 1){
        if (abcs[i] === "thief"){
            thiefs += 1;
        } else if (abcs[i] === "fighter"){
            fighters += 1;
        } else if (abcs[i] === "mage"){
            mages += 1;
        }
    }

    if(thiefs > fighters && thiefs > mages){
        most = ` <span style="font-style: italic;">Thief</span>s`;
        licence = "Thief";
    } else if (fighters > thiefs && fighters > mages){
        most = ` <span style="font-style: italic;">Fighter</span>s`;
        licence = "Fighter";
    } else if (mages > thiefs && mages > fighters){
        most = ` <span style="font-style: italic;">Mage</span>s`;
        licence = "Mage";
    } else if (thiefs === fighters && thiefs > mages){
        most = ` <span style="font-style: italic;">Thief & Fighter</span>s`;
        licence = "Thiefter";
    } else if (fighters === mages && fighters > thiefs){
        most = ` <span style="font-style: italic;">Fighter & Mage</span>s`;
        licence = "Maigter";
    } else if (mages === thiefs && mages > fighters){
        most = ` <span style="font-style: italic;">Thief & Mage</span>s`;
        licence = "Mief";
    } else if (thiefs === fighters && thiefs === mages){
        most = ` <span style="font-style: italic;">Thief & Fighter & Mage</span>s`;
        licence = "Magical Invisible Fist";
    }

    //Add the achieved licnce to the set of licences
    //TO DO - CHECK AND PREVENT DUPLICTES
    licencesSaved.push(licence);
    console.log("licencesSaved is " + licencesSaved);
    https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
    localStorage.setItem("licences", JSON.stringify(licencesSaved));
    
    displayLicences(JSON.parse(localStorage.getItem("licences")));
    

    return most;
    
}

function displayLicences(achievedLicences){
    const licenceDisplay = document.createElement("div");
    licenceDisplay.innerHTML = achievedLicences;
    if(document.getElementsByTagName("footer")[0].children.length <= 1){
    document.getElementsByTagName("footer")[0].append(licenceDisplay);
    } else {
        //something else
        console.log("trying to replace");
        document.getElementsByTagName("footer")[0].children[1].innerHTML = licenceDisplay.innerHTML;
    }
}

function clearSave(){
    licencesSaved.length = 0;
    localStorage.removeItem("licences");
    if (JSON.parse(localStorage.getItem("licences")) === null){
        displayLicences("");
    } else {
        displayLicences(JSON.parse(localStorage.getItem("licences")));
    }
    
}

function initaliseQuestions(){

    console.log("initalisation of questions...")
    //https://medium.com/@lauenroth/how-to-empty-a-const-array-365a81916e10
    answers.length = 0;
    selectedAnswer = 0;
    currentQuestion = 1;

    questionCard.innerHTML = exam.question1.questionText;
    card1.innerHTML = exam.question1.answers.answer1.answerText;
    card2.innerHTML = exam.question1.answers.answer2.answerText;
    card3.innerHTML = exam.question1.answers.answer3.answerText;

    licence = "";
}

// Page Display

// A variable that holds which page is desired.
let page = "landing";

/**
 * Hides all sections other than the one specified.
 *
 * @param {string} newpage The class name of the section to be shown
 */
function changePage(newpage) {

    // Change the page variable
    page = newpage;

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
            console.log(page);
            // Change just its display back to block or flex
            if (page === "landing" || page === "licence"){
                section.style.display = "flex";
            } else if (page === "question"){
                section.style.display = "block"; 
            } else {
                section.style.display = "flex";
            }
        }
    }
}

changePage(page);
displayLicences(JSON.parse(localStorage.getItem("licences")));