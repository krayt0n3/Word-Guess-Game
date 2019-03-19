var words = ['turtle', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];

document.onkeyup = trackKeys;
var count = 10;
var win = 0;
var lettersGuessed = [];
var rand = words[Math.floor(Math.random() * words.length)];
var correct = [];
function trackKeys(event) {
    
    var userGuess = event.key;
    if (count >= 1) {
    count -= 1;
    document.querySelector('.loss').innerHTML = count;
    lettersGuessed.push(userGuess);
    } else {
        count = 10;
    }
    var combined = lettersGuessed.join('');
    document.querySelector('.guesses').innerHTML = combined;

    
        if ((rand.indexOf(userGuess)) !== -1) {
            correct.push(userGuess)
        } 
     var more = correct.join('');
    document.querySelector('.correct').innerHTML = more;

    if (count === 0) {
        lettersGuessed.length = 0;
        (more.length= 0);
    }
};


