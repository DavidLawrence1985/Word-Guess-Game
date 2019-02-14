//=================== global var

var lives = 10;// set guesses remaining if  letter doesnt match array letter 
var wins = 0;// set wins amount start with zero and ++ return to 0 if lives === 0 
var blanks = [];//array for random word selected 
var guessedLetters = [];// missed guess letters 
var guess;
var correct = [];
var answer =["leonardo", "michaelangelo", "raphael", "donetello", "april", "caseyjones", "splinter", "shredder", "beebop", 
    "rocksteady", "footclan", "pizza","ninja", "cowabunga","sewer", "newyorkcity", "dimensionx", "radical"];//answers         
var word = answer[Math.floor(answer.length * Math.random())];//picks random word from array
var secretWord = word;

//=================== var to be displayed

document.getElementById("lives").textContent = lives;
document.getElementById("wins").textContent = wins;
 

//==============functions 
function wordGenerate() {//**works
    for (var i = 0; i < word.length; i++) {
        blanks[i] = "_";//placeholder for missing letters 
        document.getElementById('blank-word').innerHTML= blanks.join(" ");
        console.log(word);
    }
};
function newWord() {//**works
    
        for (var i = 0; i < word.length; i++) {
            blanks[i] = "_";//placeholder for missing letters 
            document.getElementById('blank-word').innerHTML= blanks.join(" ");
            
        }
};

function checkGuess(){
    document.onkeyup = function(event) {
      guess = event.key.toLowerCase();
        var correct = false;
        for(j = 0; j < word.length; j++){
            if(guess === word[j]) {//checks if guess matches word and displays in blanks **works
                blanks[j] = guess;
                document.getElementById("blank-word").innerHTML = blanks.join(" ");
                var correct = true; 
            } }

            if(blanks.join("") === secretWord)  {//mostly works** 
                alert("Good job! " + secretWord)
                guessedLetters.length = 0;
                document.getElementById("wrong-letter").innerHTML = [];
                blanks.length = 0;
                document.getElementById("wins").innerHTML = wins += 1;
                wordGenerate();
            }  
            
            if (correct) return;
            if (guessedLetters.indexOf(guess) <= 0) {//checks if guess does not match word **works
                document.getElementById("lives").innerHTML = lives -= 1;
                guessedLetters.push(guess);
                document.getElementById("wrong-letter").innerHTML = guessedLetters.join(" ");        
            }

            if(lives === 0){//**/works
                alert("YOU LOSE");
                guessedLetters.length = 0;
                document.getElementById("wrong-letter").innerHTML = [];
                blanks.length = 0;
                lives = 10;
                document.getElementById("lives").innerHTML = 10;   
                document.getElementById("wins").innerHTML = 0;
                wordGenerate();
                return;
            }
    }
};


//////the code still doesn't work exactly how it should..my word stays the same.
               