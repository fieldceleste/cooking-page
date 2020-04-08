$(document).ready(function() {
    var age = parseInt(prompt("How old are you?"));
  
    if (age > 18) {
      $('#age').show();
    } else if (age === 18) {
      alert("Now get out there and vote!");
      $('#age').show();
    } else {
      $('#under-18').show();
    }
  });