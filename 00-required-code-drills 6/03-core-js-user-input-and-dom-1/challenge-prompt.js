// User Input and Writing to DOM 1



// Declare a variable `userName`

var userName;

// Prompt the user for their name and store their response into `userName`
// hint: use javascript's built in `prompt` method

var userName = prompt("What is your name?")

// Create an alert welcoming the user to the "Sandwich Shop" using the name they just gave us

alert("Welcome to the sandwhich shop, " + userName)


// Using the `confirm` method, ask the user if they would like a sandwich
// Store their response into a new `wantsSandwich` variable

var wantsSandwich = confirmed("Would you like a sandwich?")

// Check if the user wanted a sandwich


    // If the user did want a sandwich, use the `document.write` method to write "Your sandwich will be ready soon!" to the DOM
if(wantsSandwich === true){
    alert("Your sandwich will be ready soon!")
}

else{
    document.write("Goodbye!")
}
// Else, say goodbye to the user using the name they gave us earlier



