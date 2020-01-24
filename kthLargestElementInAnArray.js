/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
        let i = 0;
        while(i < k) {
            let tempindex = NaN;
            let largest = -Infinity;
            for(let j = i; j < nums.length; j++) {
                if(nums[j] > largest) {
                    largest = nums[j];
                    tempindex = j;
                }
            }
            nums[tempindex] = nums[i];
            nums[i] = largest;
            i++;
        }
        return nums[k - 1];
};
