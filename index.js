// Requiring the Word module exported from word.js
var Word = require("./word");

// dependency for inquirer npm package;
var inquirer = require("inquirer");

//define an Array to store all the words;
var wordLib =["rockets", "warriors", "cavaliers", "celtics", "raptors", "spurs", "mavericks", "hawks", "thunder"];

//randomly choose one word from wordLib Array;
var indexOfWordChosen = randomIntFromInterval(0, wordLib.length);
var wordChosen = wordLib[indexOfWordChosen];

//create a new Word object based on the wordChosen;
var word = new Word(wordChosen);
//console.log(word);
var lettersGuessed = "";
var numOfguessLeft = 10;

function guess() {
    
    
  
    if (word.displayWord() !== wordChosen) {
        inquirer.prompt([
            {
            name: "name",
            message: "Guess a Letter!"
            }
        ]).then(function(answers) {
            if(lettersGuessed.indexOf(answers.name) > -1) {
                
                if(wordChosen.indexOf(answers.name) > -1) {
                    word.check(answers.name);
                    console.log("");
                    console.log("Correct! However you have tried this before!");
                    console.log( "Guess Number Left: " + numOfguessLeft);
                    console.log("");
                    guess();
                } else {
                    word.check(answers.name);
                    console.log("");
                    console.log("You made this same mistake before! Sorry");
                    numOfguessLeft -= 1;
                    console.log( "Guess Number Left: " + numOfguessLeft);
                    console.log("");
                    if (numOfguessLeft > 0) {
                        guess();
                    } else {
                        console.log("You Lost!");
                        inquirer.prompt([
                            {
                                name: "confirmed",
                                type: "confirm",
                                message: "Want to guess another word?"
                            }
                        ]).then(function(result){
                            if (result.confirmed) {
                                initialize();
                                guess();
                
                            } else {
                                console.log("Come Back later!");
                            }
                
                        });
                    }
                }
           
            //console.log(word.displayWord());
            //guess();
            } else {
                lettersGuessed += answers.name;
                if(wordChosen.indexOf(answers.name) > -1) {
                    word.check(answers.name);
                    console.log("");
                    console.log("Correct!");
                    console.log( "Guess Number Left: " + numOfguessLeft);
                    console.log("");
                    guess();
                } else {
                    word.check(answers.name);
                    console.log("");
                    console.log("Incorrect");
                    numOfguessLeft -= 1;
                    console.log( "Guess Number Left: " + numOfguessLeft);
                    console.log("");
                    if (numOfguessLeft > 0) {
                        guess();
                    } else {
                        console.log("You Lost!");
                        inquirer.prompt([
                            {
                                name: "confirmed",
                                type: "confirm",
                                message: "Want to guess another word?"
                            }
                        ]).then(function(result){
                            if (result.confirmed) {
                                initialize();
                                guess();
                
                            } else {
                                console.log("Come Back later!");
                            }
                
                        });
                    }
                }

            }

        });
    } else {
        console.log(" You Made IT!");
        inquirer.prompt([
            {
                name: "confirmed",
                type: "confirm",
                message: "Want to guess another word?"
            }
        ]).then(function(result){
            if (result.confirmed) {
                initialize();
                guess();

            } else {
                console.log("Come Back later!");
            }

        });
    }

}

guess();
    

// word.check("r");
// word.check("t");

// var displayword = word.displayWord();

// console.log(displayword);

function initialize() {
    //randomly choose one word from wordLib Array;
    indexOfWordChosen = randomIntFromInterval(0, wordLib.length);
    wordChosen = wordLib[indexOfWordChosen];

//create a new Word object based on the wordChosen;
    word = new Word(wordChosen);
//console.log(word);
    lettersGuessed = "";
    numOfguessLeft = 10;

}


//function to generate a random number between min and max;
function randomIntFromInterval(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);

}