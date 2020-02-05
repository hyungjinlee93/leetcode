var permute = function(nums) {
    let perms = [];
    let helper = (arr, arr2 = []) => {
        if (arr.length === 0) {
            perms.push(arr2);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let arr3 = arr2.slice();
                arr3.push(arr[i]);
                helper(arr.slice(0, i).concat(arr.slice(i + 1)), arr3);
            }
        }
    }
    helper(nums);
    return perms;
};
