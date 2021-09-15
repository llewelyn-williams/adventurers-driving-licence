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


// Progressing Questions

const answers = []
let selectedAnswer = 0

// Vaiable to track which question we are on.
let currentQuestion = 1;

// Set the initial innerHTML of the page elements
questionCard.innerHTML = exam.question1.questionText;
card1.innerHTML = exam.question1.answers.answer1.answerText;
card2.innerHTML = exam.question1.answers.answer2.answerText;
card3.innerHTML = exam.question1.answers.answer3.answerText;

// Add event listeners for accepting answers
card1.addEventListener("click", acceptAnswer);
card2.addEventListener("click", acceptAnswer);
card3.addEventListener("click", acceptAnswer);

// Advance the tracker and change the values of the cards.
function acceptAnswer(e){

    let theQuestion = "question" + currentQuestion;

    // Append stat to aswers array
    selectedAnswer = Number(this.id.slice("card".length, this.id.length));
    answerStat = exam[theQuestion].answers["answer"+selectedAnswer].answerStat;
    answers.push(answerStat);
    console.log(answers);

    // But only advance if there's still another quetion in exam to do so
    // I wasn't sure how to "get the length" of a object as it were
    // Hint found on StackOverflow:
    // https://stackoverflow.com/questions/5223/length-of-a-javascript-object
    if(currentQuestion < Object.keys(exam).length){
        currentQuestion ++;
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
        console.log(calculateMostOf(answers));
        document.getElementById("result-display-text").innerHTML += calculateMostOf(answers);
    }

    
}

function calculateMostOf(abcs){
 let alphas = 0;
 let betas = 0;
 let charlies = 0;
 let most = ` <span style="font-style: italic;">none</span> more than all others.`;

    for(let i = 0; i < abcs.length; i++){
        if (abcs[i] === "a"){
            alphas ++;
        } else if (abcs[i] === "b"){
            betas ++;
        } else if (abcs[i] === "c"){
            charlies ++;
        }
    }
    if(alphas > betas){
        most = ` <span style="font-style: italic;">A</span>s`;
    }
    if (betas > alphas){
        most = ` <span style="font-style: italic;">B</span>s`;
    }
    if (charlies > alphas || charlies > betas){
        most = ` <span style="font-style: italic;">C</span>s`;
    }
    console.log(most);
    return most;
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