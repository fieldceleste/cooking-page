$(document).ready(function() {
    var height = parseInt(prompt("How tall are you in inches?"));
  
    if (height > 60) {
      $('#height').show();
    } else if (height === 60) {
      alert("You are just the right height!");
      $('#height').show();
    } else {
      $('#under-60').show();
    }
  });