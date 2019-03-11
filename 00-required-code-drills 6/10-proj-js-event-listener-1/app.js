var userConfirm;

document.onkeyup = function(input) {
    var userKey = input.key.toLowerCase();
    console.log(userKey);


if (userKey === "h") {
                    userConfirm = confirm('Hey, whats up');}
                            

  if (userKey === "k") {
  
    if (userConfirm === true) {
      alert("Hello");}
    else {
      alert("No Thanks");}
        };


}


