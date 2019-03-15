var words = ['turtle', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];
var remainingGuess = 8;
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    if ((userGuess === 't') || (userGuess === 'u') || (userGuess === 'r') || (userGuess === 'l') 
    || (userGuess === 'e') || (userGuess === 'p') || (userGuess === 'h') || 
    (userGuess === 'a') || (userGuess === 'n') || (userGuess === 'o') || (userGuess === 's') || 
    (userGuess === 'i') || (userGuess === 'c') || (userGuess === 'b') || (userGuess === 'd') || 
    (userGuess === 'g') || (userGuess === 'f')) {
        alert('User Guess: ' + userGuess);
    } else {
        document.querySelector('.loss').innerHTML = remainingGuess--;
    }
}
