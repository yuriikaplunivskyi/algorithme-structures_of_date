/* 
[en]

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
 */

function translatePigLatin(str) {
  let firstVowel = str.search(/[aeuiou]/);

  return firstVowel === 0 ? str + 'way': str.substring(firstVowel) + str.substring(0, firstVowel) + 'ay';
}

console.log(translatePigLatin("cnsonant"));
