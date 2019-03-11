// Event Listeners and `this`

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------
  // Creating a new variable Button using Jquery that will go in the 
  var newButton = $("<button>");
// Giving the button a type from Bootstrap
  newButton.addClass("btn btn-success");
// The new button will have the string text displayed within it:
  newButton.text(str);
// This will take the data from the content as well.
  newButton.data(str);
// This will send the new button created to the "button-area" ID on the HTML document. 
  $("#button-area").append(newButton);


// function createButton(str) {
//   var newButton = $("<button>");
//   newButton.text(str)
//   newButton.data(str)
//   newButton.addClass("btn btn-danger");
//   $("#button-area").append(newButton);
// }

  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------

var text = $(this).data("content");
$("#display-area").append(text);




  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------

  $(document).on("click", "")





  // ---------- End of Code area ----------
})


// // function createButton(){
//   var newButton = ("<button>");
//   newButton.text(str);
//   newButton.sr(str);
//   newButton.addClass("btn btn-danger");
//   $("#button-area").append(newButton);
// }

fucntion createButton(str){

var newButton = ("<button>");
newButton.text(str);
newButton.data(str);
newButton.addClass("btn btn-light")
$("#button-area").append(newButton);
}