// Practice with timers

// This is the audio sound for the last part:

var audio = new Audio("honk.mp3");

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function question1 (){
    alert("Question 1");
}

setTimeout (question1, 1000 * 5);

console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function question2 () {
    alert("Question 2")
}

var question2 = setTimeout(question2, 1000 * 15);


// Remove the timer you just made for Question 2

clearTimeout(question2);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

function question3 (){
    alert("Question 3 part 1");
}

var question3 = setTimeout(question3, 1000 * 15);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function question3Part2 (){
    alert("Question 3 Part 2");
}

var question3Part2 = setTimeout(question3Part2, 1000 * 16);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(question3);

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"

function playSound{
    audio.play();
    console.log("Question 5 Completed!";)
}

var playSound = setTimeout(playSound, 1000 *11);

