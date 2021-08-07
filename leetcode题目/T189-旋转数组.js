var rotate = function(nums, k) {
    const len = nums.length;
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let n = (i+k)%len;
        res[n] = nums[i];
    }
    nums = res;
};

const nums = [1,2,3,4,5,6,7];

const nums2 =[1,2,3,4,5,6,7];

console.log(rotate(nums,3));