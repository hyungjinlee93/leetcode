/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let backIndex = nums.length - 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val && i < backIndex) {
            if(nums[backIndex] !== val) {
                nums[i] = nums[backIndex];
                nums[backIndex] = val;
                backIndex--;
            } else {
                while(nums[backIndex] === val) {
                    backIndex--;
                }
                if(backIndex <= i) {
                    break;
                }
                nums[i] = nums[backIndex];
                nums[backIndex] = val;
                backIndex--;
            }
        }
        if(i >= backIndex) {
            break;
        }
    }
    while(nums[nums.length - 1] === val) {
        nums.pop();
    }
    return nums.length;
};
