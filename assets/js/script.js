// Array of all the licences you can achieve.
const allLicences = ["Thief", "Fighter", "Mage", "Thiefter", "Mief", "Maighter"];

// Various Elements by ID
const questionCard = document.getElementById("question-display");
const backgroundMusic = new Audio("assets/sound/enchanted-valley.mp3");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

// this presumably creates 120fps style fluidity
const cardAnimator = setInterval(moveCard, 1000 / 120);

// Array to hold answers selected
const answers = [];

// A variable that holds which page is desired.
let page = "landing";

//Page from
let lastPage = "landing";

//Array for the achieved licences
let licencesSaved = [];

// Progressing Questions
let selectedAnswer = 0;

// Variable to track which question we are on.
let currentQuestion = 1;
let enlarged = false;

// Sound Effects Volume
let soundsVolume = 1;

function moveCard() {
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

// Music Toggle Handler
// Hint from StackOverflow
// https://stackoverflow.com/questions/32438068/perform-an-action-on-checkbox-checked-or-unchecked-event-on-html-form
function handleMusicCheckbox(checkBox) {
    if (checkBox.checked) {
        backgroundMusic.play();
        backgroundMusic.loop = true;
        // Also make sure that the volume is set correctly when turning on.
        backgroundMusic.volume = document.getElementById("music-volume").value/100;
    } else {
        backgroundMusic.pause();
    }
}

function handleMusicSlider (slider){
    backgroundMusic.volume = slider.value/100;
}

function handleSoundsCheckbox(checkBox) {
    if (!checkBox.checked) {
        soundsVolume = 0;
    } else {
        soundsVolume  = document.getElementById("sounds-volume").value/100;
    }
}

function handleSoundsSlider(slider){
    soundsVolume  = slider.value/100;
    if (document.getElementById("sounds").checked){
        const audio = new Audio("assets/sound/expand-box.ogg");
        audio.volume = soundsVolume;
        audio.play();
    }
}

// Animate Clicked Card
function enlargeCard(e) {
    if (!enlarged) {

        // Tip for handling audio from StackOverflow
        // https://stackoverflow.com/questions/9419263/how-to-play-audio

        const audio = new Audio("assets/sound/expand-box.ogg");
        audio.volume = soundsVolume;
        audio.play();

        const animationSettings = {
            maxWidth: "500px",
            width: "70%",
            height: "40px",
            paddingTop: "93px",
            paddingBottom: "93px",
            paddingLeft: "1rem",
            paddingRight: "1rem"
        };

        if (this.id === "card1") {
            this.style.cursor = "unset";
            $(this).animate(animationSettings, 800, function () { });
            $(this.nextElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            $(this.nextElementSibling.nextElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            enlarged = true;
            // Remove englargement event listener
            card1.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function () {
                card1.addEventListener("click", acceptAnswer);
                card1.style.cursor = "pointer";
            }, 800);

        } else if (this.id === "card2") {
            this.style.cursor = "unset";
            $(this).animate(animationSettings, 800, function () { });
            $(this.nextElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            $(this.previousElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            enlarged = true;
            // Remove englargement event listener
            card2.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function () {
                card2.addEventListener("click", acceptAnswer);
                card2.style.cursor = "pointer";
            }, 800);
        } else if (this.id === "card3") {
            this.style.cursor = "unset";
            $(this).animate(animationSettings, 800, function () { });
            $(this.previousElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            $(this.previousElementSibling.previousElementSibling).animate({ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }, 800, function () { });
            enlarged = true;
            // Remove englargement event listener
            card3.removeEventListener("click", enlargeCard);
            // Add event listener for accepting answers
            // But only after the animation has finished.
            setTimeout(function () {
                card3.addEventListener("click", acceptAnswer);
                card3.style.cursor = "pointer";
            }, 800);
        }

        // Change the Card text to the full text
        let theQuestion = "question" + currentQuestion;
        const preNumberNamePart = "card";
        this.innerHTML = exam[theQuestion].answers["answer" + Number(this.id.slice(preNumberNamePart.length, this.id.length))].answerText;
    }
}

function resetCardStyles() {
    if (enlarged) {

        const resetStyle = `
            height: 60px;
            width: 200px;
            maxWidth: none;
            marginTop:20px;
            marginBottom: 20px;
            opacity:100%;
            paddingBottom:"";
            paddingTop:"";
            paddingLeft:"";
            paddingRight:""
        `;
        card1.style.cssText = resetStyle;
        card1.removeEventListener("click", acceptAnswer);
        card1.addEventListener("click", enlargeCard);

        card2.style.cssText = resetStyle;
        card2.removeEventListener("click", acceptAnswer);
        card2.addEventListener("click", enlargeCard);

        card3.style.cssText = resetStyle;
        card3.removeEventListener("click", acceptAnswer);
        card3.addEventListener("click", enlargeCard);

        enlarged = false;
    }
}

// Advance the tracker and change the values of the cards.
function acceptAnswer(e) {

    const audio = new Audio("assets/sound/flip-card.ogg");
    audio.volume = soundsVolume;
    audio.play();

    let theQuestion = "question" + currentQuestion;
    let answerStat = "";
    const preNumberNamePart = "card";
    // Append stat to aswers array
    selectedAnswer = Number(this.id.slice(preNumberNamePart.length, this.id.length));
    answerStat = exam[theQuestion].answers["answer" + selectedAnswer].answerStat;
    answers.push(answerStat);

    // But only advance if there's still another quetion in exam to do so
    // I wasn't sure how to "get the length" of a object as it were
    // Hint found on StackOverflow:
    // https://stackoverflow.com/questions/5223/length-of-a-javascript-object
    if (currentQuestion < Object.keys(exam).length) {
        currentQuestion += 1;
        theQuestion = "question" + currentQuestion;
        questionCard.innerHTML = exam[theQuestion].questionText;
        card1.innerHTML = exam[theQuestion].answers.answer1.answerTextShort;
        card2.innerHTML = exam[theQuestion].answers.answer2.answerTextShort;
        card3.innerHTML = exam[theQuestion].answers.answer3.answerTextShort;
    } else {
        // Last answer given. End.
        changePage("licence");

        // Display Text and Licence Achieved
        // calculateMostOf(answers) will return a string of length 2.
        const calculatedAnswers = calculateMostOf(answers);
        // Add text to the page.
        document.getElementById("result-display-text").innerHTML = "You chose mostly" + calculatedAnswers[0];
        // Add the licence element to the page.
        const achievedLicence = document.getElementById(calculatedAnswers[1].toLowerCase() + "-licence").cloneNode(true);
        document.getElementById("result-display-text").append(achievedLicence);
        const awardNoise = new Audio("assets/sound/Interaction_With_Magic_Gem.wav");
        awardNoise.volume = soundsVolume;
        awardNoise.play();
    }

    resetCardStyles();

}

function calculateMostOf(abcs) {
    let thiefs = 0;
    let fighters = 0;
    let mages = 0;
    let most = ` <span style="font-style: italic;">none</span> more than all others.`;
    let i = 0;
    let licence = "";

    for (i = 0; i < abcs.length; i += 1) {
        if (abcs[i] === "thief") {
            thiefs += 1;
        } else if (abcs[i] === "fighter") {
            fighters += 1;
        } else if (abcs[i] === "mage") {
            mages += 1;
        }
    }

    if (thiefs > fighters && thiefs > mages) {
        most = ` <span style="font-style: italic;">Thief</span>s`;
        licence = "Thief";
    } else if (fighters > thiefs && fighters > mages) {
        most = ` <span style="font-style: italic;">Fighter</span>s`;
        licence = "Fighter";
    } else if (mages > thiefs && mages > fighters) {
        most = ` <span style="font-style: italic;">Mage</span>s`;
        licence = "Mage";
    } else if (thiefs === fighters && thiefs > mages) {
        most = ` <span style="font-style: italic;">Thief & Fighter</span>s`;
        licence = "Thiefter";
    } else if (fighters === mages && fighters > thiefs) {
        most = ` <span style="font-style: italic;">Fighter & Mage</span>s`;
        licence = "Maighter";
    } else if (mages === thiefs && mages > fighters) {
        most = ` <span style="font-style: italic;">Thief & Mage</span>s`;
        licence = "Mief";
    } else if (thiefs === fighters && thiefs === mages) {
        most = ` <span style="font-style: italic;">Thief & Fighter & Mage</span>s`;
        licence = "Magical Invisible Fist";
    }

    //Add the achieved licnce to the set of licences
    licencesSaved.push(licence);

    licencesSaved.forEach(function(individualLicence){
        /* Code / Guidance on how to use an array in localStorag via StackOverflow
        https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
        */
       if(JSON.parse(localStorage.getItem("licences")) !== null && JSON.parse(localStorage.getItem("licences")).includes(individualLicence)){
        // Matches licences already awarded, therefore no need to do anything.
       } else {
        localStorage.setItem("licences", JSON.stringify(licencesSaved));
        removeNoLicencesMessage();
       }
    });

    activeDeleteButton();

    // Display Licences
    displayLicences(JSON.parse(localStorage.getItem("licences")));

    return [most, licence];
}

function displayLicences(achievedLicences) {
    // Run though each possible licnce type
    allLicences.forEach(function (theLicence) {
        // Check that there are actually licences awarded to display
        if (achievedLicences !== null && achievedLicences.length > 0) {
            // If you find the one we're looking at this iteration...
            if (achievedLicences.includes(theLicence)) {
                // Change the display to "flex" so that it displays
                document.getElementById(theLicence.toLowerCase() + "-licence").style.display = "flex";
            }
        } else {
            //Hide them all.
            document.getElementById(theLicence.toLowerCase() + "-licence").style.display = "none";
            twemoji.parse(document.getElementById(theLicence.toLowerCase() + "-licence"));
        }
    });
}

function clearSave() {
    const audio = new Audio("assets/sound/crumpling-paper.ogg");
    audio.volume = soundsVolume;
    audio.play();
    licencesSaved.length = 0;
    localStorage.removeItem("licences");
    if (JSON.parse(localStorage.getItem("licences")) === null) {
        displayLicences("");
        addNoLicencesMessage();
    } else {
        displayLicences(JSON.parse(localStorage.getItem("licences")));
    }

    deactiveDeleteButton();
}

function deactiveDeleteButton(){
    const deleteButton = document.getElementById("delete-save");
    deleteButton.disabled = true;
    deleteButton.style.cssText = "background-color: #828282;";
    deleteButton.innerText = "No Licences to Delete";
}

function activeDeleteButton(){
    const deleteButton = document.getElementById("delete-save");
    deleteButton.disabled = false;
    deleteButton.style.cssText = "background-color: #f96363;";
    deleteButton.innerText = "Delete Saved Licences";
}

function initaliseQuestions() {
    /* Tip gained for setting the array.length to
       zero as a way of "clearing" a const array
       from medium article.
       https://medium.com/@lauenroth/how-to-empty-a-const-array-365a81916e10
    */
    answers.length = 0;
    selectedAnswer = 0;
    currentQuestion = 1;

    questionCard.innerHTML = exam.question1.questionText;
    card1.innerHTML = exam.question1.answers.answer1.answerTextShort;
    card2.innerHTML = exam.question1.answers.answer2.answerTextShort;
    card3.innerHTML = exam.question1.answers.answer3.answerTextShort;

}

/**
 * Hides all sections other than the one specified.
 *
 * @param {string} newpage The class name of the section to be shown
 */
function changePage(newpage) {

    //Take note of the page you are moving from
    lastPage = page;

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
    function changeDisplay(section) {
        // Change the display over every section to none.
        section.style.display = "none";

        // But then if the section is the one you want...
        if (section === activeSection[0]) {
            // Change just its display back to block or flex
            if (page === "landing" || page === "licence") {
                section.style.display = "flex";
            } else if (page === "question") {
                section.style.display = "block";
                turnOnMyFooterButton(); 
                if(lastPage === "landing"){
                    //Play start sound
                    const audio = new Audio("assets/sound/start.wav");
                    audio.volume = soundsVolume;
                    audio.play();
                }
            } else {
                section.style.display = "flex";
            }
            if (page !== "question"){
                // Do not display the button in the footer
                document.getElementById("footer-options").style.display = "none";
            }
            if (page === "landing"){
                initaliseQuestions();
            }
        }
    }
}

function turnOnMyFooterButton(){
    document.getElementById("footer-options").style.display = "block";
}

function handleOptionsBack() {
    if (lastPage === "question"){
        changePage("question");
    } else {
        changePage("landing");
    }
}

function addNoLicencesMessage() {
    const noLicences = document.createElement("div");
    noLicences.innerText = "Take the test to earn your first adverturer licence.";
    noLicences.id = "no-licences";
    document.getElementsByClassName("licences")[0].children[0].appendChild(noLicences);
}

function removeNoLicencesMessage() {
    if (document.getElementById("no-licences")){
        document.getElementById("no-licences").remove();
    } else {
        // It's not there so no need to remove it
    }
}

function init(){
    // position it nearly completely off to the left
    document.getElementById("card1").style.left = - (screen.width / 2 + 60) + "px";

    // load any licenses
    if (JSON.parse(localStorage.getItem("licences"))) {
        const licencesFromStorage = JSON.parse(localStorage.getItem("licences"));
        licencesSaved = licencesFromStorage;
    } else {
        // Disable the delete licences button if there aren't any
        deactiveDeleteButton();
        addNoLicencesMessage();
    }

    // Set the initial innerHTML of the page elements
    questionCard.innerHTML = exam.question1.questionText;
    card1.innerHTML = exam.question1.answers.answer1.answerTextShort;
    card2.innerHTML = exam.question1.answers.answer2.answerTextShort;
    card3.innerHTML = exam.question1.answers.answer3.answerTextShort;

    // Add event listener for enlarging cards
    card1.addEventListener("click", enlargeCard);
    card2.addEventListener("click", enlargeCard);
    card3.addEventListener("click", enlargeCard);

    changePage(page);
    displayLicences(JSON.parse(localStorage.getItem("licences")));

    twemoji.parse(document.body);
}

init();