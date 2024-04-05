/* 
[ua]

Поверніть true, якщо заданий рядок є паліндромом. В іншому випадку, поверніть false.

Паліндром — це слово чи речення, що однаково пишеться в обох напрямках (зліва направо та справа наліво), незважаючи на розділові знаки, велику/малу літеру чи пробіли.

Примітка: вам потрібно прибрати всі символи, що не є абетко-цифровими (розділові знаки, пробіли та символи) і написати весь текст одинаково (великими або малими літерами) для перевірки паліндромів.

Ми будемо передавати рядки з різними форматами (наприклад, racecar, RaceCar та race CAR).

Ми також будемо передавати рядки зі спеціальними символами (наприклад, 2A3*3a2, 2A3 3a2 та 2_A3*3#A2).

[en]

Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.



*/
//through loop "for"
function palindrome(str) {
  const regex = /[^a-zA-Z0-9]/g;
  let trsStr = str.replace(regex, "").toLowerCase();
  let reverseStr = "";
  for ( let i = trsStr.length-1; i >= 0; i-- ){
    reverseStr += trsStr[i];
  }
  if  (trsStr === reverseStr) {
    return true;
  } 
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
//through js methods
function palindrome(str) {
  const regex = /[^a-zA-Z0-9]/g;
  let trsStr = str.replace(regex, "").toLowerCase();
  let reverseStr = trsStr.split("").reverse().join("");
  if  (trsStr === reverseStr) {
    return true;
  } 
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));