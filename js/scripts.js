$(document).ready(function() {
  // Capture the input where users may enter a sentence.
  $("form#wordplayform").submit(function() {
    var userInput;
    var arrayWords = [];
    var newArray = [];
    event.preventDefault();

    userInput = $("input#userInput").val();
    // Turn that sentence into an array using the split method.
    arrayWords = userInput.split([" "]);
    // Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
    console.log(arrayWords);

    arrayWords.forEach(function() {
      newArray = arrayWords.length >=3;
    });

    $("#resultsList").append("<li>" + arrayWords + "</li>");
    // Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

  });
});
