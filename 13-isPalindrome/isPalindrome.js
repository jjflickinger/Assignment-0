function isPalindrome(word) {
  let isPalindrome = true;
  for (let i = 0; i <= word.length/2; i++) {
    if ( word.charAt(i) != word.charAt(word.length - i - 1) ) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

// Do not edit this line;
module.exports = isPalindrome;
