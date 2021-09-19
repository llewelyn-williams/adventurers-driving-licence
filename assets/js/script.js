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
card1.innerHTML = exam.question1.answers.answer1.answerTextShort;
card2.innerHTML = exam.question1.answers.answer2.answerTextShort;
card3.innerHTML = exam.question1.answers.answer3.answerTextShort;

//Add event listener on back button to reset questions
const footerBackButton = document.getElementById("footer-return");
footerBackButton.addEventListener("click", initaliseQuestions);


// Add event listentings for enlarging cards
card1.addEventListener("click", enlargeCard);
card2.addEventListener("click", enlargeCard);
card3.addEventListener("click", enlargeCard);

let enlarged = false;

// Animate Clicked Card
function enlargeCard(e){
    if (!enlarged){

        // Tip for handling audio from StackOverflow
        // https://stackoverflow.com/questions/9419263/how-to-play-audio

        const audio = new Audio("assets/sound/card-enlarge.wav");
        audio.play();

        console.log("this is : " + this);
        if(this.id === "card1"){
            this.style.cursor = "unset";
            $(this).animate({maxWidth:"500px", width: "80%", height:"100px", paddingTop: "100px", paddingBottom: "100px", paddingLeft:"1rem", paddingRight: "1rem"}, 800, function(){});
            $(this.nextElementSibling).animate({height: 0, opacity: 0, marginTop: 0, marginBottom: 0}, 800, function(){});
            $(this.nextElementSibling.nextElementSibling).animate({height: 0, opacity: 0,  marginTop: 0, marginBottom: 0}, 800, function(){});
            englarged = true;
            //Remove englargement event listener
            card1.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function(){
                card1.addEventListener("click", acceptAnswer);
                card1.style.cursor = "pointer";
            }, 800);
            
        } else if (this.id === "card2"){
            this.style.cursor = "unset";
            console.log("this is : " + this.id);
            $(this).animate({maxWidth:"500px", width: "80%", height:"300px"}, 800, function(){});
            $(this.nextElementSibling).animate({height: 0, opacity: 0, marginTop: 0, marginBottom: 0}, 800, function(){});
            $(this.previousElementSibling).animate({height: 0, opacity: 0,  marginTop: 0, marginBottom: 0}, 800, function(){});
            englarged = true;
            //Remove englargement event listener
            card2.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function(){
                card2.addEventListener("click", acceptAnswer);
                card2.style.cursor = "pointer";
            }, 800);
        } else if (this.id === "card3"){
            this.style.cursor = "unset";
            console.log("this is : " + this.id);
            $(this).animate({maxWidth:"500px", width: "80%", height:"300px"}, 800, function(){});
            $(this.previousElementSibling).animate({height: 0, opacity: 0, marginTop: 0, marginBottom: 0}, 800, function(){});
            $(this.previousElementSibling.previousElementSibling).animate({height: 0, opacity: 0,  marginTop: 0, marginBottom: 0}, 800, function(){});
            englarged = true;
            //Remove englargement event listener
            card3.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function(){
                card3.addEventListener("click", acceptAnswer);
                card3.style.cursor = "pointer";
            }, 800);
        }

        // Change the Card text to the full text
        let theQuestion = "question" + currentQuestion;
        const preNumberNamePart = "card";
        this.innerHTML = exam[theQuestion].answers["answer"+Number(this.id.slice(preNumberNamePart.length, this.id.length))].answerText;
    }
}

function resetCardStyles(){
    if (englarged){
        // let i = 1;
        // for (i; i < 4; i += 1){

        // }
        //$("#card1").finish()

        console.log("Hellow from resert styles")
        card1.style.height = "10px"
        card1.style.width = "190px";
        card1.style.maxWidth = "";
        card1.style.height = "60px";
        card1.style.marginTop = "50px";
        card1.style.marginBottom = "50px";
        card1.style.opacity = "100%";
        card1.style.paddingBottom = "";
        card1.style.paddingTop = "";
        card1.style.paddingLeft = "";
        card1.style.paddingRight = "";
        card1.removeEventListener("click", acceptAnswer);
        card1.addEventListener("click", enlargeCard);

        card2.style.height = "10px"
        card2.style.width = "190px";
        card2.style.maxWidth = "";
        card2.style.height = "60px";
        card2.style.marginTop = "50px";
        card2.style.marginBottom = "50px";
        card2.style.opacity = "100%";
        card2.style.paddingBottom = "";
        card2.style.paddingTop = "";
        card2.style.paddingLeft = "";
        card2.style.paddingRight = "";
        card2.removeEventListener("click", acceptAnswer);
        card2.addEventListener("click", enlargeCard);

        card3.style.height = "10px"
        card3.style.width = "190px";
        card3.style.maxWidth = "";
        card3.style.height = "60px";
        card3.style.marginTop = "50px";
        card3.style.marginBottom = "50px";
        card3.style.opacity = "100%";
        card3.style.paddingBottom = "";
        card3.style.paddingTop = "";
        card3.style.paddingLeft = "";
        card3.style.paddingRight = "";
        card3.removeEventListener("click", acceptAnswer);
        card3.addEventListener("click", enlargeCard);

        enlarged = false;
    }
}

// Advance the tracker and change the values of the cards.
function acceptAnswer(e){

    const audio = new Audio("assets/sound/turn-page.wav");
    audio.play();

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
        card1.innerHTML = exam[theQuestion].answers.answer1.answerTextShort;
        card2.innerHTML = exam[theQuestion].answers.answer2.answerTextShort;
        card3.innerHTML = exam[theQuestion].answers.answer3.answerTextShort;
    } else {
        // Last answer given. End.
        console.log("END!");
        console.log(answers);
        changePage("licence");

        //Display Text and Licence Achieved
        document.getElementById("result-display-text").innerHTML = "You chose mostly" + calculateMostOf(answers)[0];
        const achievedLicence = document.getElementById(calculateMostOf(answers)[1].toLowerCase() + "-licence").cloneNode(true);
        document.getElementById("result-display-text").append(achievedLicence);
    }

    resetCardStyles();

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
        licence = "Maighter";
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
    
    // Display Licences
    displayLicences(JSON.parse(localStorage.getItem("licences")));
    
    return [most, licence];
    
}

const allLicences = ["Thief", "Fighter", "Mage", "Thiefter", "Mief", "Maighter"]

function displayLicences(achievedLicences){

    // Run though each possible licnce type
    allLicences.forEach(function(theLicence){
        // Check that there are actually licences awarded to display
        if (achievedLicences != null && achievedLicences.length > 0){
            // If you find the one we're looking at this iteration...
            if (achievedLicences.includes(theLicence)){
            // Change the display to "flex" so that it displays
            document.getElementById(theLicence.toLowerCase() +"-licence").style.display = "flex";
            }
        } else {
            //Hide them all.
            document.getElementById(theLicence.toLowerCase() +"-licence").style.display = "none";
            twemoji.parse(document.getElementById(theLicence.toLowerCase() +"-licence"));
        }
    })
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
    card1.innerHTML = exam.question1.answers.answer1.answerTextShort;
    card2.innerHTML = exam.question1.answers.answer2.answerTextShort;
    card3.innerHTML = exam.question1.answers.answer3.answerTextShort;

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
                //Play start sound
                const audio = new Audio("assets/sound/start.wav");
                audio.play();
            } else {
                section.style.display = "flex";
            }
        }
    }
}

changePage(page);
displayLicences(JSON.parse(localStorage.getItem("licences")));

twemoji.parse(document.body);