module.exports = function () {

    // This is where we import our random-words program
    var randomWord = require('random-words');
    var say = require('say');

    // We can use it to make a song!
    // e.g. This might output:
    //      dog space pizza
    var mySong = randomWord() + ' ' + randomWord() + ' ' + randomWord();

    // Sing it!
    console.log("Let's sing a purple song.");
    say.speak(null, mySong);
}
