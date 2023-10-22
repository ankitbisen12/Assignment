// Que A: Take a sentence as an input and reverse every word in that sentence. 
//      a.Example - This is a sunny day > shiT si a ynnus yad.


//function for reverse words of a sentence.
function reverseWordsInSentence(sentence) {
    // It will simply split the sentence into words
    const words = sentence.split(' ');

    // It will simply reverse the word and store into new array
    const reverseWords = words.map(word => {
      // first word is split into character and store into an array, then array 
      // is reversed and then all chararcter is joined to make a word and lastly word is returned.
      return word.split('').reverse().join('');
    });
  
    // It will simply join all words to make a sentence with whitespaces.
    const reversedSentence = reverseWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example:
  const sentence = "This is a sunny day";
  const reverseSentence = reverseWordsInSentence(sentence);
  console.log(reverseSentence); 
  // Output: "sihT si a ynnus yad"