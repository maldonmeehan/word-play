$(document).ready(function() {
  $("form#wordplayform").submit(function() {
    var userInput;
    var arrayWords = [];
    userInput = $("input#userInput").val();
    arrayWords = userInput.split([" "]);
    console.log(arrayWords);
    event.preventDefault();
  });
});
