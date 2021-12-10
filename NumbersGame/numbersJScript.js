// JavaScript File to play Number Guessing Game  11/13/2021
// NOW IN JAVASCRIPT MODE
var myMessage = "Hi Console!";
var getName = "name";
var getNumber = 0;
var gameNumber = 6;
var resultMsg = "Waiting to play";

console.log(myMessage);
myMessage = "Guessing numbers between 1 and 5.";
document.getElementById("userMessage").innerHTML = myMessage;
    
// Function Part 1 - Get Name & Computer Number
function play() {
    myMessage = "User clicked button to play game.";
    document.getElementById("userMessage").innerHTML = myMessage;
    getName = prompt("Please enter your name.", "name");
    document.getElementById("userName").innerHTML = "Hello, " + getName + "!";
    
    gameNumber = Math.floor(Math.random() * 5) + 1;
    console.log("Computer has chosen number: ", gameNumber);
    document.getElementById("userMessage").innerHTML = "Think of a number from 1 to 5.";

    // Create delay in order to show greeting and pick a number message.
    //     (This required splitting the gameplay function into Parts 1 & 2)
    setTimeout(play2, 1500)
}

// Function Part 2 - Get User Guess & Show Results
function play2() {
    getNumber = prompt("Enter a number between 1 and 5.");
    console.log(getName, " picked number: ", getNumber);
    document.getElementById("userMessage").innerHTML = "You picked number : " + String(getNumber) +
        " and Computer picked number : " + String(gameNumber);
    
    if(getNumber != gameNumber) {
        resultMsg = "You guessed wrong!"
    } else {
        resultMsg = "WOW! You guessed the number!";
    }
    document.getElementById("winnerMessage").innerHTML = resultMsg;	
}

// END OF JAVASCRIPT