// /Global Varibles
var crystal = {
    blue:{


    name: "Blue",
    value: 0
},
green:{


    name: "Green",
    value: 0
},
red:{


    name: "Red",
    value: 0
},
yellow:{


    name: "Yellow",
    value: 0
},
}

// Track Score (Current and Target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;

// Functions
var randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function(){
    // Reset the Current Score
currentScore    = 0;

    // Set a new Target Score (between 19 and 120)
targetScore = randomNumber(19,120);
    // Set different values for each of the crystals (between 1 and 12)
crystal.blue.value      = randomNumber(1,12);
crystal.green.value     = randomNumber(1,12);
crystal.red.value       = randomNumber(1,12);
crystal.yellow.value    = randomNumber(1,12);
    // Change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

console.log("------------------------------------")
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value ," | Red: " + crystal.red.value , " | Green: " + crystal.green.value , " | Yellow: " + crystal.yellow.value);
console.log("------------------------------------")
}

// Crystal clicks

var crystalValues = function(crystal) {
    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();

    console.log("Your Score: " + currentScore);
}
var checkWin = function() {
// IF currentScore is larger than tagetScore = Loss
    if(currentScore > targetScore){
        alert("You lost! Sorry buddy..");
        lossCount++;
        $("#lossCount").html(lossCount);

        startGame();
    
    }
    else if (currentScore == targetScore) {
        alert("Congrats! You Won!");
        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }
}


// Main
startGame();

$("#blueCrystal").click(function(){
    crystalValues(crystal.blue);
})
$("#greenCrystal").click(function(){

    crystalValues(crystal.green);
})
$("#redCrystal").click(function(){

    crystalValues(crystal.red);
})
$("#yellowCrystal").click(function(){

    crystalValues(crystal.yellow);
})
