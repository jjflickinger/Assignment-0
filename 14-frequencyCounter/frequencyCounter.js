function frequencyCounter(word) {
  let counter = {};
  let arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    let key = word.charAt(i);
    if (key in counter) {
      counter[key]++;
    } else {
      counter[key] = 1;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;
