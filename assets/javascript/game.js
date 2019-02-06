


var word = ["leonardo", "michelangelo", "raphael", "donetello", "april oneal", "casey jones", 
            "splinter", "shredder", "beebop", "rocksteady", "footclan", "krang", "pizza","ninja"];

var answer = word[Math.floor(word.length * Math.random())];

function gameWord() {

document.getElementById("word").innerHTML= answer;

};