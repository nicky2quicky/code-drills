$(document).ready(function () {

    $(document).on("click", "#randomLetter", function() {

        // create variable called `text` and have it equal an empty string
            var text ;
        
        // create a variable called `possibleLetters` that contains all the letters of the alphabet
            var possibleLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
        // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`
        var randIndex = possibleLetter[Math.floor(Math.random() * possibleLetter.length-1)]
        
        // Using the `randIndex` and `possibleLetters` variables, set `randLetter` to be a random letter
            var randLetter = possibleLetter.charAt(randIndex);
    
        
        // console log the value of `randLetter`
            console.log(randLetter)
        
        // append `randLetter` to the element with an id of `letters`
            $("letters").append(randLetter);
        

    });

});
//  !!!!!!Create a variable of the array - then create a variable for a index of that array - then create another variable that = "array variable.charAt(index)" to have it create a random number!!!!!