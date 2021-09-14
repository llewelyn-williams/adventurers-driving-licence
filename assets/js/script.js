let card1 = document.getElementById("card1"); //the first div

document.getElementById("card1").style.left = - (screen.width/2 + 60) + "px"; // position it nearly completely off to the left
console.log (document.getElementById("card1").style.left); // check it's position in the console

let cardAnimator = setInterval(moveCard, 1000/120); // this presumabley creates 120fps style fluidity

function moveCard(){
    let lpos = card1.style.left; //assign the starting left to a variable
    let myNum = Number(card1.style.left.slice(0, lpos.length - 2)); //get just the number part from the "..px" left value
    card1.style.left = (myNum + 12) + "px"; //add 30 to it and then append the "px" back on and update the left type to be that.
    console.log((myNum + 12) + "px"); // console log the updating values

    // stop animating
    if (myNum >= 0) {
        clearInterval(cardAnimator); //stop the setInterval
        card1.style.left = "0px"; // set the card back to its intended end position.
    };
}



