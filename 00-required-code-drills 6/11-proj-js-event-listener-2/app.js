var userPressed = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz";

document.onkeyup = function(input){
  var userKey = input.key.toLowerCase();

  if (alphabet.includes(userKey)){
    document.getElementById("current").textContent = userKey;
    userPressed.push(userKey);
    document.getElementById("pressed").textContent = userPressed;
  }

  else{document.getElementById("current").textContent = "Please press a letter from the alphabet";}
}

