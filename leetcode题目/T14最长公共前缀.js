var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ''
    }
    // 最长的公共字符串，先取数组的第一个元素，后续进行比较来截取
    let res = strs[0]
    // 从第二个元素开始
    for (let i = 1; i < strs.length; i++) {
        // 与原数组的第二个元素开始比较,从头开始比较直到遇到不一致的地方，然后截取res字符串
        let j = 0
        for (; j < res.length && j < strs[i].length; j++) {
            // 找到开始不一致的字符的位置
            if (res.charAt(j) !== strs[i].charAt(j)) {

                break;
            }
        }
        // 第一个参数为起始索引位置，第二个参数为选取多少个元素
        res = res.substr(0, j)
    }
    return res
};


// strs = ["flower", "flow", "flight"]
strs = ["dog","racecar","car"]
const p = longestCommonPrefix(strs)

console.log(p);