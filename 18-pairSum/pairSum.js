function pairSum(nums, target) {
  if (nums.length < 2) {
    throw 'Array must have length 2 or greater.'
  }
  try {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i]+nums[j] == target) {
          return true;
        }
      }
    }
    return false;
  } catch(err) {
    console.error(err);
  }
}

// Do not edit this line;
module.exports = pairSum;
