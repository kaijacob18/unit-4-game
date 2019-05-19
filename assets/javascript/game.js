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
blue:{


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

    // Set a new Target Score (between XX and XX)
targetScore = randomNumber(19,120);
    // Set different values for each of the crystals (between XX and XX)
crystal.blue.value      = randomNumber(1,12);
crystal.green.value     = randomNumber(1,12);
crystal.red.value       = randomNumber(1,12);
crystal.yellow.value    = randomNumber(1,12);
    // Change the HTML to reflect all of these changes
}

// Main
$("#blueCrystal").click(function(){
    alert("test");
})
$("#greenCrystal").click(function(){

    alert("test");
})
$("#redCrystal").click(function(){

    
})
$("#yellowCrystal").click(function(){

    
})
