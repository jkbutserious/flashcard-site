$(document).ready(function(){
  $(".flashcard").click(function(){
    $(this).children().fadeToggle();
  });
});