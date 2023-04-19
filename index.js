function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

/* 
reverse the input string

return truthiness of: the reversed string is the same as the input
*/

/*
Reverses the string and checks if it is the same as the original string.
Returns true if it is the same, false if it is not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("i"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
}

module.exports = isPalindrome;
