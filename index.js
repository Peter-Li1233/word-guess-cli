var Letter = require("./Letter");

var word = "rockets";

var charArr = word.split("");

var guessArr =[];
for (i=0;i<charArr.length;i++) {
    guessArr.push(new Letter(charArr[i]));

}

console.log(guessArr);

var guessWord = "";

for (i=0;i<guessArr.length;i++) {
    guessWord += guessArr[i].display()+" ";

}

console.log(guessWord);

function check(char){
    for (i=0;i<guessArr.length;i++) {
        //console.log(guessArr[i].underlyingletter);
        // if (char === guessArr[i].underlyingLetter) {
        //     guessArr[i].guessed = true;
        // }
        var character = char;
        guessArr[i].check(character);

    }
}

check("r");
check("o");
check("t");

console.log(guessArr);

guessWord = "";

for (i=0;i<guessArr.length;i++) {
    guessWord += guessArr[i].display()+" ";

}

console.log(guessWord);