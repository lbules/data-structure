var singleNumber = function(nums) {
    const map = {}
    for(let v of nums) {
        map[v] = map[v]==null?1:map[v]+1
    }

    for(let i in map) {
        if(map[i]===1) {
            return i
        }
    }

};



const nums = [2,2,1]
const nums2 = [4,1,2,1,2]

console.log(singleNumber(nums)); 