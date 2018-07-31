var Letter = require("./letter");
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:
function Word(underlyingWord) {

    this.underlyingWord = underlyingWord;

// * An array of `new` Letter objects representing the letters of the underlying word
        //* A private function to generate a underlying word Arr;
        this.fillWordArr = function() {
            var word = this.underlyingWord;
            var guessWordArr =[];
            for(i=0;i<word.length;i++) {
                guessWordArr.push(new Letter(word.charAt(i)));
            }

            return guessWordArr;
        }
    //this.wordArr = [];
    this.wordArr = this.fillWordArr();

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.displayWord = function() {
        var guessWord = "";
        var displayWord = "";
        for (i=0;i<this.wordArr.length;i++) {
            guessWord += this.wordArr[i].display();
            displayWord += this.wordArr[i].display() + " ";
        
        }
        //guessWord = guessWord.trim()
        console.log(displayWord);
        return guessWord;
    }

    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.check = function(char){
         var character = char;
         for (i=0;i<this.wordArr.length;i++) {
           
            this.wordArr[i].check(character);
    
        }
    }
   
}

module.exports = Word;