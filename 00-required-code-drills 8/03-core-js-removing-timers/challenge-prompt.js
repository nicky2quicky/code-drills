// Day 01
// Acitivity 04


// returns a function that console logs the str argument
// since the setTimeout method requires a function that hasn't been
// invoked yet, we have to return a function instead of just providing
// the console logs within this function.
function log(str) {
  return function() {console.log(str)}
}

console.log("==================== Question 01 ====================");
var one = setTimeout(log("Question1-1"), 1000 * 5);
var two = setTimeout(log("Question1-2"), 1000 * 6);
var three = setTimeout(log("Question1-3"), 1000 * 7);

// remove the timers `one`, `two`, and `three`
clearTimeout(one);
clearTimeout(two);
clearTimeout(three);

console.log("==================== Question 02 ====================");
// create a timer that logs "Hello" after 17 seconds

var question2 = setTimeout(log("Hello"), 1000 * 17);

// remove the timer you just made

clearTimeout(question2);


console.log("==================== Question 03 ====================");
// create a timer that logs "Goodbye" after 17 seconds

var question3 = setTimeout(log("Goodbye"), 1000 * 17);

// create a timer that removes the "Goodbye" timer after 5 seconds
// HINT: much like the `log` function we defined at the top of the page,
// you're going to have to create a function that returns another function

function remove (){
  return clearTimeout (question3)
}
setTimeout(remove, 1000 * 5);

console.log("==================== Question 04 ====================");
// create a timer that logs "Part 1" after 3 seconds

var question4 = setTimeout(log("Part 1"), 1000 * 3);

// create a timer that removes the "Part 1" timer after 2 seconds and also
// console logs out "Part 2" when it runs

function removeQuestion4Part2 (){
  return clearTimeout (question4);
  console.log("Part 2");
}

var removeQuestion4Part2 = setTimeout(removeQuestion4Part2, 1000 * 2);

// create a timer that removes the "Part 2" timer after 1 second and also
// console logs out "Part 3" when it runs

function removeQuestion4Part3 (){
  return clearTimeout (removeQuestion4Part2);
  console.log("Part 3")
}

var removeQuestion4Part3 = setTimeout(removeQuestion4Part3, 1000 * 1);

console.log("==================== Question 05 ====================");
var alertArray = [
  setTimeout(log("Question5-1"), 1000 * 5),
  setTimeout(log("Question5-2"), 1000 * 5),
  setTimeout(log("Question5-3"), 1000 * 5),
  setTimeout(log("Question5-4"), 1000 * 5),
  setTimeout(log("Question5-5"), 1000 * 5),
  setTimeout(log("Question5-6"), 1000 * 5),
  setTimeout(log("Question5-7"), 1000 * 5),
  setTimeout(log("Question5-8"), 1000 * 5),
  setTimeout(log("Question5-9"), 1000 * 5),
  setTimeout(log("Question5-10"), 1000 * 5),
  setTimeout(log("Question5-11"), 1000 * 5),
];

// remove all the timers created by `alertArray`.

function removeAlerts () {
  for (var i =0; i < alertArray.length; i++)
  clearTimeout(alertArray[i])
}

removeAlerts;

