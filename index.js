function isPalindrome(string) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      return true
  }
  else {
      return false
  }
}

/* 
  Add your pseudocode here
  1-take whole word
  2-split whole word to pieces so you can use word by word
  3-reverse the chars u splited 
  4-put the reversed chars together 
  5-make a condition to see if main word is equal too reversed word if true its palindrome if not its not palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;