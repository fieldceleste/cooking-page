// Business (or back-end) logic:
var tablespoonConversion = 3
var cupConversion = 8
var poundsConversion = 454
var gallonConversions = 3.8

var teaToTab = function (tablespoon){
  return tablespoon / tablespoonConversion;
};

var ounToCup = function (cup) {
  return cup / cupConversion;
};


var graToPound = function (pounds) {
  return pounds / poundsConversion;
};


var litToGal = function (gallon) {
  return gallon / gallonConversion;
};

// User interface (or front-end) logic:

$(document).ready(function () {

  $("form#tablespoon").submit(function (event) {
    event.preventDefault();
    var tablespoon = parseInt($("#tablespoon1").val());
    var result = teaToTab(tablespoon,tablespoonConversion);
    $("#output1").text(result);
  });
    $("form#cup").submit(function (event) {
      event.preventDefault();
      var cup = parseInt($("#cup1").val());
      var result = ounToCup(cup,cupConversion);
      $("#output2").text(result);
    });
      $("form#pounds").submit(function (event) {
        event.preventDefault();
        var pounds = parseInt($("#pounds1").val());
        var result = graToPound(pounds,poundsConversion);
        $("#output3").text(result);
      });
        $("form#gallon").submit(function (event) {
          event.preventDefault();
          var gallon = parseInt($("#gallon1").val());
          var result = litToGal(gallon,gallonConversion);
          $("#output4").text(result);
       
    
    
  });
});