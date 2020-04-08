$(document).ready(function() {
  $("p").click(function() {
  $(this).siblings().removeClass('my-list--selected');
  $(this).addClass('my-list--selected');
  });
});