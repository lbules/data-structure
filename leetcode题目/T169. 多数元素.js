/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const n = nums.length
    const map = {}

    for(const v of nums) {
        map[v] = map[v]==null?1:map[v]+1
    }

    for(item in map) {
        if(map[item]>n/2)
         return item
    }
};

const arr1 = [3,2,3]
const arr2 = [2,2,1,1,1,2,2]

// majorityElement(arr1)
console.log(majorityElement(arr2));