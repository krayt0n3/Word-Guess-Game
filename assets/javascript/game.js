var words = ['fox', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];

document.onkeyup = trackKeys;
var count = 10;
var wins = 0;
var lettersGuessed = [];
var rand = words[Math.floor(Math.random() * words.length)];
var separate = Array.from(rand);
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

    for (var i = 0; i < separate.length; i++) {

        if (separate[i] === userGuess) {
            correct.splice(i, 0, separate[i])
        } 
    }
    var more = correct.join('');
    document.querySelector('.correct').innerHTML = more;

    if (count === 0) {
        lettersGuessed.length = 0;
    }

    for (var i = 0; i < words.length; i++) {
        if (correct === words[i]) {
            wins += 1;
        }
    }

if (more.length === 10) {
    correct = [];
}

if ((correct.join('')) === rand) {
    wins++;
} document.querySelector('.wins').innerHTML = wins;

if (wins === 1) {
    location.reload();
}

};


