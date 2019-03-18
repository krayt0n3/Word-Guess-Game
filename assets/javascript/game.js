var words = ['turtle', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];

document.onkeyup = trackKeys;
var count = 10;
var lettersGuessed = [];
function trackKeys(event) {
    
    var userGuess = event.key;
    if (count >= 1) {
    count -= 1;
    document.querySelector('.loss').innerHTML = count;
    lettersGuessed.push(userGuess);
    } else {
        count = 10;
    }
    
    document.querySelector('.guesses').innerHTML = lettersGuessed;

    
};


