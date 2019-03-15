var words = ['turtle', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];
var remainingGuess = 10;
document.onkeyup = function(event) {
var each = Array.from(words[0]);
    var userGuess = event.key;
    var collect = document.querySelector('.guesses').innerHTML = userGuess;
    for (var i = 0; i < each.length; i++) {
        if(userGuess === each[i]) {
            document.querySelector('.correct').innerHTML = collect;
        }else{ document.querySelector('.loss').innerHTML = remainingGuess--;
    }
}
}