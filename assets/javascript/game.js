// change to capital and see //
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 0;
var guessed = 0;
// maybe change guesses to 1 //

    // user guess //
    document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).
            toLowerCase();
    
    // computer guess (random) //
        var computerGuess = options[Math.floor(Math.random()*options.length)];

        
    // capture the entry in the field when user releases button
        document.getElementById("submitguess").onclick = function() {
        var x = document.getElementById("guessField").value;
            if(x == computerGuess)
            {
                alert("Nice!! You guessed it right in " + guesses + " guesses ");
            }
            else {
                alert("Sorry! Try again");
            }
        }

        var html = "<h1>Guess what letter I'm thinking of</h1>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses: " - guesses - "</p>" +
        "<p>guessed: " + options + "</p>";

        document.querySelector('#game').innerHTML = html;
    }






