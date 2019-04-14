var win = 0;
var loss = 0;
var guess = 9;
var guessArray = [];
var randomLetter;
function compGuess() {
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    randomLetter = alphaArray[Math.floor(Math.random() * alphaArray.length)];
    console.log(randomLetter);
    return randomLetter;
}
compGuess();
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    console.log("comp guess" + randomLetter);



    if (userGuess === randomLetter) {
        win = win + 1;
        console.log("you win this time" + win);
        document.getElementById("win").innerHTML = "Wins:" + win;
        guess = 9;
        document.getElementById("guessCount").innerHTML = "Number of guesses left:" + guess;
        guessArray = [];
        compGuess();
        document.getElementById("guess").innerHTML = "Guesses made so far:" + guessArray;



        return false;

    }
    guessArray.push(userGuess);
    console.log(guessArray);

    guess--;



    document.getElementById("win").innerHTML = "Wins:" + win;
    document.getElementById("loss").innerHTML = "Losses:" + loss;
    document.getElementById("guessCount").innerHTML = "Number of guesses left:" + guess;
    document.getElementById("guess").innerHTML = "Guesses made so far:" + guessArray;

    console.log(guess);
    if (guess< 1) {
        console.log(guessArray);
        loss = loss + 1;
        document.getElementById("loss").innerHTML = "Losses:" + loss;
        console.log("you loss this time" + loss);
        guessArray = [];  
        document.getElementById("guess").innerHTML = "Guesses made so far:" + guessArray;
        guess = 9;
        document.getElementById("guessCount").innerHTML = "Number of guesses left:" + guess;



        compGuess();


    }
}







