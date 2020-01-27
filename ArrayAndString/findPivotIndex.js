/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for(let i = 0; i < nums.length; i++){
      if (accumulator(nums.slice(0, i)) === accumulator(nums.slice(i + 1))) {
          return i;
      }
  }
  return -1;
};

var accumulator = function(nums) {
  if(nums.length === 0) {
      return 0;
  } else {
      return nums.reduce((acc, num) => acc + num);
  }
}