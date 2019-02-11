//=================== global var

var lives = 10;// set guesses remaining if  letter doesnt match array letter 
var wins = 0;// set wins amount start with zero and ++ return to 0 if lives === 0 
var blanks = [];//array for random word selected 
var guessedLetters = [];// missed guess letters 
var guess;
var correct = [];//correct guess
//var guess = "";//user guess

//=================== var to be displayed

document.getElementById("lives").textContent = lives;
document.getElementById("wins").textContent = wins;
//document.getElementById("wrong-letter").textContent = missedGuess;
//document.getElementById("current-guess").textContent = currentGuess;
//window.getElementById("blank-word").add

//=================== display secret word
   var answer =["leonardo", "michaelangelo", "raphael", "donetello", "arpiloneil", "caseyjones", 
            "splinter", "shredder", "beebop", "rocksteady", "footclan", "krang", "pizza","ninja", "cowabunga"];//answers

    var word = answer[Math.floor(answer.length * Math.random())];//picks random word from array

  //var secretWord = word.split("");

    
    
 

    //var blankWord = blanks.join(" ");//spaces for dispayed word

   //  blankWord;

//var missingLetters = blanks.length; //how many letters to guess



//==============display current guessed letter

/* var currentGuess = document.onkeyup = function(event) {//Key stroke for guessing missing letters    
            event.key.toLowerCase();
    };*/
//==============functions 
function wordGenerate(){
        for (var i = 0; i < word.length; i++) {//random word broken down to blanks to display
        blanks[i] = "_";
        document.getElementById('blank-word').innerHTML= blanks.join(" ");
        console.log(word)
};
};

 function checkGuess(){
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
     // var correct = false;
        for(i = 0; i < word.length; i++){
            if(guess === word[i]) {//if letter is in word
            blanks[i] = guess;//blanks array = guessed letter 
            document.getElementById("blank-word").innerHTML = blanks.join(" ");//send letter to array of word
            //correct = true;
            console.log("match");
            }
           // if (correct) return;
            if (guessedLetters.indexOf(guess) < 0) {//if the array of guessed letters index
                guessedLetters.push(guess);
                document.getElementById("wrong-letter").innerHTML = guessedLetters.join(" ");
               // document.getElementById("lives").textContent = lives--;
            }
            /*else {
                lives--;
                document.getElementById("wrong-letter").innerHTML += event.key;
                console.log("missed letter");   */
              }  
            };
          
        };
        



 
  //secretWord.forEach(guess);
  

/*
window.onkeyup function to call function to activate

check letters against blank letters if "" === [""]

 if correct display letter in place of blank
else --lives and place guessed letter to "guessed letter area"

*/