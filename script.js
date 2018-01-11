// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
    var input = $("#word").val(); 
    $("#translate").click(function(){
    $("#word").val(); 
    console.log("#word");
    });
    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWith(word) {
    return word.charAt(0);
    }
    function wordStartsWithVowel(word) {
    return word.charAt(0) === "a" || 
           word.charAt(0) === "e" || 
           word.charAt(0) === "i" || 
           word.charAt(0) === "o" || 
           word.charAt(0) === "u";
    }
    if(wordStartsWithVowel(testWord1) === true){
    //  console.log("true");
    //  } else{
    //    console.log("false");
    //}

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
    return word + "yay";
    }
    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
    var other = word.substring(1);
    var first = word.charAt(0);
    return other+ first+"ay";
    }
    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
        if(wordStartsWithVowel === true){
            appendYayToWord
            return input
        }else if(wordStartsWithVowel === true){
            convertWordWithConsonant
            return input
        }
    }
    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element

});
