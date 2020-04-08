$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Hello Dog</li>");
    $("ul#webpage").prepend("<li>Bark Bark!</li>");
  });
  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Hello Cat</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");
  });
});






