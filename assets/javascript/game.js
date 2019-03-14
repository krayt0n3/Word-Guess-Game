let words = ['turtle', 'elephant', 'ostrich', 'bull', 'dog', 'frog'];
var string = Array.from(words[0]);
var loser = words.shift();
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    trackKeys();
});

function trackKeys() {
    let win = 0;
    let firstGuess = 8;
    let str = [];

document.addEventListener('keydown', event =>{
    const charList = 'abcdefghijklmnopqrstuvwxyz';
    const key = event.key.toLowerCase();
    if (charList.indexOf(key) === -1) return;
    const lastGuess = 'keyup';

    if (lastGuess === 8) {
        str = [];
    }
    str.push(key);
    firstGuess = lastGuess;
    console.log(str);
})
}
