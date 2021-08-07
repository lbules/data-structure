/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = {}
    // 循环遍历s字符串
    for (v of s) {
        // map中没有该值
        // if (map[v] == null) {
        //     map[v] = 1
        // } else {
        //     map[v] += 1
        // }

        map[v] = map[v]==null?1:map[v]+1
    }
    // 再去从头遍历map
    for (let i = 0; i < s.length; i++) {
        // s[i]是存入到map对象中的key
        if (map[s[i]] === 1) //找到第一个为1，既不重复的
            return i
    }
    // 如果没有不重复的
    return -1
};

const str = 'leetcode'
const res = firstUniqChar(str)

console.log(res);

/* for(let i = 0;i<str.length;i++) {
    console.log(str[i]);
} */