//=================== global var

var lives = 10;// set guesses remaining if  letter doesnt match array letter 
var wins = 0;// set wins amount start with zero and ++ return to 0 if lives === 0 
var blanks = [];//array for random word selected 
var guessedLetters = [];// missed guess letters 
var guess;
var correct = [];
//var hidden = [];
//var blankWord = [] ;
var answer = ["cat", "dog", "bat", "house"]; /*["leonardo", "michaelangelo", "raphael", "donetello", "arpil", "caseyjones", "splinter", "shredder", "beebop", 
    "rocksteady", "footclan", "pizza","ninja", "cowabunga"];//answers*/           
var word = answer[Math.floor(answer.length * Math.random())];//picks random word from array
var secretWord = word.split("");
//var x = blanks.join("");

//=================== var to be displayed

document.getElementById("lives").textContent = lives;
document.getElementById("wins").textContent = wins;
 

//==============functions 
function wordGenerate(){//**works
    for (var i = 0; i < word.length; i++) {
        blanks[i] = "_";//placeholder for missing letters 
        document.getElementById('blank-word').innerHTML= blanks.join(" ");
    };
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
            //hidden.push(guess); tried using this with sort then sort blanks[] to see if they match 
            
            } }
            
            if (correct) return;
            if (guessedLetters.indexOf(guess) <= 0) {//checks if guess does not match word **works
                document.getElementById("lives").innerHTML = lives -= 1;
                guessedLetters.push(guess);
                document.getElementById("wrong-letter").innerHTML = guessedLetters.join(" ");        
            }
           
            if(lives === 0){//**/works
                document.getElementById("lives").innerHTML = 10;
                alert("YOU LOSE");
                wordGenerate();
                document.getElementById("wrong-letter").innerHTML = [];
                document.getElementById("wins").innerHTML = 0;
            }
            
            if(blanks === secretWord )   {// I think for some reason my vars aren't visable or someother issue console.log will log the word but says undefined underneath?
            // i have tried length of each, array1 === array2(using the vars blanks and blankword), 
            //tried placing the correct letters into another array(hidden[]) then doing hidden.sort() === blanks.sort(). 
            //tried secretWord === blanks. 
                document.getElementById("wins").innerHTML = wins++;
                //document.getElementById("wrong-letters").innerHTML = [];
                wordGenerate();
                console.log("win");
    
             }  
};}

/*function checkWin(){ not sure if it needs a separate function to check for win
    
 }*/
