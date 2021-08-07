/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    const a = [...s].sort()
    const b = [...t].sort()

    // 转成数组进行排序，如果出现的字符和次数都一样，
    // 两个数组相同索引的值也相同
    for (let i = 0; i < s.length; i++) {
        if (a[i] !== b[i])
            return false
    }

    return true
};

const s = 'rat'
const t = 'car'

const res = isAnagram(s, t)
console.log(res);
