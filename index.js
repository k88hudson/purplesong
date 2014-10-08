module.exports = function () {
    var randomWord = require('random-words');

    // Make a song!
    var mySong = randomWord() + ' ' + randomWord() + ' ' randomWord();

    // Sing it!
    console.log("Let's sing a purple song.");
    console.log(mySong);
}
