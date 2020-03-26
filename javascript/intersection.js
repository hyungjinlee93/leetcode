/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = [];
    let set1 = new Set();
    let set2 = new Set();
    for(let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i]);
    }
    for(let i = 0; i < nums2.length; i++) {
        set2.add(nums2[i]);
    }
    if (set1.size > set2.size) {
        set2.forEach(item => {
            if (set1.has(item)) {
                intersection.push(item);
            }
        })
    } else {
        set1.forEach(item => {
            if (set2.has(item)) {
                intersection.push(item);
            }
        })
    }
    return intersection;
};
