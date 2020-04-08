$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefult();
    var person1Input = $('input#person1').val().toUpperCase();

  $(".output").person(person1Input);
    
  });
});
