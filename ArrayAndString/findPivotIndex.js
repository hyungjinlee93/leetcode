/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  for(let i = 1; i < nums.length - 1; i++){
      if(nums.slice(0, i).reduce((acc, num) => acc + num) === nums.slice(i + 1).reduce((acc, num) => acc + num)) {
          return i;
      }
  }
  return -1;
};