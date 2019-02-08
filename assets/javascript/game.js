
window.onload = function(){

var answer = ["LEONARDO", "MICHAELANGELO", "RAPHAEL", "DONETELLO", "APRILONEAL", "CASSEYJONES", 
            "SPLINTER", "SHREDDER", "BEEBOP", "ROCKSTEADY", "FOOTCLAN", "KRANG", "PIZZA","NINJA", "COWABUNGA"];//answers

var word = answer[Math.floor(answer.length * Math.random())];//picks random word from array

var blanks = [];//array for random word selected

for (var i = 0; i < word.length; i++) {//random word broken down to blanks 
    blanks[i] = "_";
}

var blankWord = blanks.join(" ");//format of blank letters 

//var missingLetters = blanks.length; //how many letter to guess

   document.getElementById('blankWord').innerHTML= blankWord;


//assign array item to matching blanks ?

document.onkeyup = function(event){

    var guess = event.key.toUpperCase()//figure out what to do here assign keys toUpperCase

    for (var j = 0; j <blanks.length; j++);

        if( guess === missingLetters) {
            console.log()
   
        
};
}
};
//};

    //for( var j = 0; j < blanks.length; j++);get keyup to cycle through var blank word
//foreach() look into
//guess letter

var lives = "";// set guesses remaining if  letter doesnt match array letter --

var wins = "";// set wins amount start with zero and ++ return to 0 if lives === 0 

var guessedLetters = "";// missed guess letters 

//check letters against blank letters if "" === [""]

    // if correct display letter in place of blank
    //else --lives and place guessed letter to "guessed letter area"

