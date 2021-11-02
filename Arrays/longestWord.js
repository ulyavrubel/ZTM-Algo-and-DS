// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
//https://coderbyte.com/results/UlyanaS:Longest%20Word:JavaScript

function longestWord(sen) {
  const words = sen.split(' ');
  let maxLengthWord = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[\W]/g, '');

    if (word.length > maxLengthWord.length) maxLengthWord = word;
  }
  return maxLengthWord;
}

// keep this function call here
console.log(longestWord('fun&!! time'));
